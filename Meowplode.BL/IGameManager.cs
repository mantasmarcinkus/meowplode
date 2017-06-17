using Meowplode.BL.DTOs;
using Meowplode.BL.Models;
using System.Collections.Generic;

namespace Meowplode.BL
{
    public interface IGameManager
    {
        IEnumerable<QuestionDTO> GetQuizQuestions();

        GameResult SaveResult(SubmissionDTO result);
    };
}