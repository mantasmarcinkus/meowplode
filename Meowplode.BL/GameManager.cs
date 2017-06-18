using Meowplode.BL.DTOs;
using Meowplode.BL.Models;
using Meowplode.DAL;
using Meowplode.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Meowplode.BL
{
    /// <summary>
    /// Manages Quiz game
    /// </summary>
    public class GameManager : IGameManager
    {
        private readonly int _questionCount;

        private readonly IRepository<Question, Guid> _questionRepo;

        private readonly IRepository<Leaderboard, Guid> _leaderboardRepo;

        public GameManager(IRepository<Question, Guid> questionRepo, IRepository<Leaderboard, Guid> leaderboardRepo, int questionCount = 10)
        {
            _questionRepo = questionRepo;
            _leaderboardRepo = leaderboardRepo;
            _questionCount = questionCount;
        }

        /// <summary>
        /// Gets <code>QUESTION_COUNT</code> questions and randomizes them before returning.
        /// </summary>
        /// <returns>List of questions</returns>
        public IEnumerable<QuestionDTO> GetQuizQuestions()
        {
            return _questionRepo.GetAll().ToList().Shuffle().Take(_questionCount).ToDTOs();
        }

        /// <summary>
        /// Saves players name and results to storage
        /// </summary>
        /// <param name="submission"></param>
        /// <returns>GameResult object containing bool property Success</returns>
        public GameResult SaveResult(SubmissionDTO submission)
        {
            var questionAnsweredCorrectly = _questionRepo
                .GetAll()
                .Where(question =>
                    submission.ProvidedResults.Any(r => r.QuestionId == question.Id) &&
                    question.Options.FirstOrDefault(x => x.Correct).Id == submission.ProvidedResults.FirstOrDefault(sb => sb.QuestionId == question.Id).OptionId);

            var count = questionAnsweredCorrectly.Count();
            _leaderboardRepo.Create(new Leaderboard()
            {
                DateCreated = DateTime.Now,
                Name = submission.Name,
                Result = count == _questionCount,
                SuccessfullyAnswered = count
            });

            _leaderboardRepo.Commit();

            return new GameResult(count == _questionCount);
        }

    }
}
