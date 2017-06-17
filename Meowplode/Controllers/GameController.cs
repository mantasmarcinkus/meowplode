using Meowplode.BL;
using Meowplode.BL.DTOs;
using Meowplode.BL.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;

namespace Meowplode.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class GameController : Controller
    {
        private readonly IGameManager _gameManager;

        public GameController(IGameManager gameManager)
        {
            _gameManager = gameManager;
        }

        [HttpGet]
        public IEnumerable<QuestionDTO> Start(string name)
        {
            return _gameManager.GetQuizQuestions();
        }

        [HttpPost]
        public GameResult Submit([FromBody]SubmissionDTO result)
        {
            if(result == null || result.ProvidedResults == null)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return new GameResult() { Error = "No data recieved" };
            }

            return _gameManager.SaveResult(result);
        }
    }
}
