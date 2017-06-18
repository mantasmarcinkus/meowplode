namespace Meowplode.BL.Models
{
    public class GameResult
    {
        public GameResult() { }

        public GameResult(bool success)
        {
            this.Success = success;
        }

        public bool Success { get; set; } = false;

        public string Error { get; set; }
    }
}
