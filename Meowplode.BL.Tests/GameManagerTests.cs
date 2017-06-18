using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Meowplode.DAL;
using Meowplode.DAL.Models;
using System.Collections.Generic;
using System.Linq;
using Meowplode.BL.DTOs;

namespace Meowplode.BL.Tests
{
    [TestClass]
    public class GameManagerTests
    {
        private IRepository<Question, Guid> MockQuestionRepo(int number = 11)
        {
            var repo = new Mock<IRepository<Question, Guid>>();
            var options = new List<Option>()
            {
                new Option() { Correct = true, Id = Guid.NewGuid(), Value = "Option" },
                new Option() { Correct = false, Id = Guid.NewGuid(), Value = "Option2" }
            };

            var list = new List<Question>();
            list.AddRange(Enumerable.Repeat(new Question() { Id = Guid.NewGuid(), Value = "Question", Options = options }, number));
            repo.Setup(c => c.GetAll()).Returns(list);

            return repo.Object;
        }

        private IRepository<Leaderboard, Guid> MockLeaderboardRepo(int number = 10)
        {
            var repo = new Mock<IRepository<Leaderboard, Guid>>();
            var list = new List<Leaderboard>();
            list.AddRange(
                Enumerable.Repeat(
                    new Leaderboard()
                    {
                        Id = Guid.NewGuid(),
                        Name = "Name",
                        Result = true,
                        SuccessfullyAnswered = 10
                    }, number));
            repo.Setup(c => c.GetAll()).Returns(list);

            return repo.Object;
        }

        [TestMethod]
        public void Get_QuizQuestions_Returns10()
        {
            // Arrange
            var repo = MockQuestionRepo();
            var gm = new GameManager(repo, MockLeaderboardRepo());

            // Act
            var result = gm.GetQuizQuestions();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(10, result.Count());
            Assert.AreNotEqual(repo.GetAll().FirstOrDefault().Id, result.FirstOrDefault());
        }

        [TestMethod]
        public void Get_QuizQuestions_LessThan10()
        {
            // Arrange
            var questionsCount = 5;
            var repo = MockQuestionRepo(questionsCount);
            var gm = new GameManager(repo, MockLeaderboardRepo());

            // Act
            var result = gm.GetQuizQuestions();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(questionsCount, result.Count());
            Assert.AreNotEqual(repo.GetAll().FirstOrDefault().Id, result.FirstOrDefault());
        }

        [TestMethod]
        public void Save_Submission_Success()
        {
            // Arrange
            var repo = MockQuestionRepo(1);
            var gm = new GameManager(repo, MockLeaderboardRepo(), 1);
            var question = repo.GetAll().FirstOrDefault();
            var submission = new SubmissionDTO()
            {
                Name = "Name",
                ProvidedResults = new List<AnswerDTO>()
                {
                    new AnswerDTO()
                    {
                        QuestionId = question.Id,
                        OptionId = question.Options.FirstOrDefault().Id
                    }
                }
            };

            // Act
            var result = gm.SaveResult(submission);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(true, result.Success);
            Assert.AreEqual(null, result.Error);
        }

        [TestMethod]
        public void Save_Submission_Failure()
        {
            // Arrange
            var repo = MockQuestionRepo(1);
            var gm = new GameManager(repo, MockLeaderboardRepo(), 1);
            var question = repo.GetAll().FirstOrDefault();
            var submission = new SubmissionDTO()
            {
                Name = "Name",
                ProvidedResults = new List<AnswerDTO>()
                {
                    new AnswerDTO()
                    {
                        QuestionId = question.Id,
                        OptionId = question.Options.LastOrDefault().Id
                    }
                }
            };

            // Act
            var result = gm.SaveResult(submission);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(false, result.Success);
            Assert.AreEqual(null, result.Error);
        }
    }
}
