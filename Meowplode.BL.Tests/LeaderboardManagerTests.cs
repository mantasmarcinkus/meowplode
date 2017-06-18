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
    public class LeaderboardManagerTests
    {
        private IRepository<Leaderboard, Guid> MockLeaderboardRepo(int number = 10)
        {
            var repo = new Mock<IRepository<Leaderboard, Guid>>();
            var list = new List<Leaderboard>();
            for (int i = 0; i < number; i++)
            {
                list.Add(new Leaderboard()
                {
                    Id = Guid.NewGuid(),
                    Name = "Name",
                    Result = true,
                    SuccessfullyAnswered = 10,
                    DateCreated = DateTime.Now.AddHours(i)
                });
            }

            repo.Setup(c => c.GetAll()).Returns(list);

            return repo.Object;
        }

        [TestMethod]
        public void Get_Leaderboard_Ordered()
        {
            // Arrange
            var repo = MockLeaderboardRepo();
            var lm = new LeaderboardManager(repo);

            // Act
            var result = lm.GetLeaderboard();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(10, result.Count());
            Assert.IsTrue(result.FirstOrDefault().DateCreated > result.LastOrDefault().DateCreated);
        }
    }
}
