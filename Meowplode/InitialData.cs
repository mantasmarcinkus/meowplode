using Meowplode.DAL;
using Meowplode.DAL.Models;
using System;
using System.Collections.Generic;

namespace Meowplode
{
    public static class InitialData
    {
        private static Question CreateQuestion(string question, string option1, string option2, string option3, int correct)
        {
            return new Question()
            {
                Value = question,
                Options = new List<Option>()
                {
                    new Option() { Value = option1, Correct = correct == 0 },
                    new Option() { Value = option2, Correct = correct == 1 },
                    new Option() { Value = option3 , Correct = correct == 2},
                }
            };
        }

        private static readonly List<Question> questions = new List<Question>()
        {
            CreateQuestion("This kitten may survive fall from:", "26 stories", "15 stories", "32 stories", 2),
            CreateQuestion("This kitten gets in a group and that group is called: ", "A group of kittens", "Clowder", "Meowder", 1),
            CreateQuestion("To control this kittens ears it uses: ", "20 muscles", "1 bicep", "16 muscles", 0),
            CreateQuestion("This kitten will probably sleep around (of it's lifetime): ", "100%", "80%", "70%", 2),
            CreateQuestion("This kitten can't taste", "Sourness", "Sweetness", "Umami", 1),
            CreateQuestion("If this kitten dies it might leave you:", "13 million dollars", "ONE MILLION DOLLARS", "One Apple", 0),
            CreateQuestion("A technical term for \"hairball\" would be:", "Bezoar", "Moaroar", "Cathorror", 0),
            CreateQuestion("Similarity between your brains and this kittens brains is: ", "0%", "90%", "100%", 1),
            CreateQuestion("This kitten is smarter than an iPad", "-100 times", "500 times", "1000 times", 2),
            CreateQuestion("Abraham Lincoln was a kitten person. How many did he keep in the White House?", "1000", "4", "0", 1),
            CreateQuestion("Kitten door inventor: ", "Abraham Lincoln", "Isaac Newton", "Albert Einstein", 1),
            CreateQuestion("An animal sneezed on Noah's Ark and two kittens came out. Which animal was it?", "Tiger", "Lion", "Elephant", 1),
            CreateQuestion("Kitten will use a body part to check if it will fit through a space. Which body part?", "Eyes", "Tail", "Whiskers", 2),
            CreateQuestion("This kitten is faster than", "Usain Bolt", "Turtle", "You", 0),
            CreateQuestion("This kitten can be recognized uniquely using: ", "Tail", "Nose", "Ears", 1),
            CreateQuestion("An Egyptian word for kitten is", "Cat", "Mau", "Puff", 1),
            CreateQuestion("This kittens carbon footprint is like: ", "VW Beatle", "Hummer", "Koenigsegg Agera RS", 0),
            CreateQuestion("This kitten will bring you a mice to show you that: ", "You need to eat", "You suck at hunting", "She doesn't know where to put it", 1)
        };


        public static void CreateInitialData(IRepository<Question, Guid> repo)
        {
            repo.BulkInsert(questions);
            repo.Commit();
        }
    }
}
