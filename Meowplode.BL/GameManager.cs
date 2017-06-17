using Meowplode.BL.DTOs;
using Meowplode.BL.Models;
using Meowplode.DAL;
using Meowplode.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Meowplode.BL
{
    public class GameManager : IGameManager
    {
        private const int QUESTION_COUNT = 10;

        private readonly IRepository<Question, Guid> _questionRepo;

        private readonly IRepository<Leaderboard, Guid> _leaderboardRepo;

        public GameManager(IRepository<Question, Guid> questionRepo, IRepository<Leaderboard, Guid> leaderboardRepo)
        {
            _questionRepo = questionRepo;
            _leaderboardRepo = leaderboardRepo;
        }

        /// <summary>
        /// Gets <code>QUESTION_COUNT</code> questions and randomizes them before returning.
        /// </summary>
        /// <returns>List of questions</returns>
        public IEnumerable<QuestionDTO> GetQuizQuestions()
        {
            // TODO: Shuffle Options too!
            return _questionRepo.GetAll().ToList().Shuffle().Take(QUESTION_COUNT).ToDTOs();
        }

        public GameResult SaveResult(SubmissionDTO submission)
        {
            var questionAnsweredCorrectly = _questionRepo.GetAll().Where(question =>
                    submission.ProvidedResults.Any(r => r.QuestionId == question.Id) &&
                    question.Options.FirstOrDefault(x => x.Correct).Id == submission.ProvidedResults.FirstOrDefault(sb => sb.QuestionId == question.Id).OptionId);

            var count = questionAnsweredCorrectly.Count();
            _leaderboardRepo.Create(new Leaderboard()
            {
                DateCreated = DateTime.Now,
                Name = submission.Name,
                Result = count == QUESTION_COUNT,
                SuccessfullyAnswered = count
            });

            _leaderboardRepo.Commit();

            return new GameResult()
            {
                Success = count == QUESTION_COUNT
            };
        }

    }
}
