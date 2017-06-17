using Meowplode.DAL.Models;
using System.Collections.Generic;

namespace Meowplode.BL.DTOs
{
    /// <summary>
    /// Change this with AutoMapper
    /// </summary>
    /// <remarks>When converting entities to DTO they will be converted to lists and the data will be retrieved</remarks>
    public static class DTOHelper
    {
        public static IEnumerable<QuestionDTO> ToDTOs(this IEnumerable<Question> entities)
        {
            var result = new List<QuestionDTO>();
            foreach (var i in entities)
            {
                result.Add(i.ToDTO());
            }

            return result;
        }

        public static QuestionDTO ToDTO(this Question entity)
        {
            return new QuestionDTO()
            {
                Id = entity.Id,
                Options = entity.Options?.ToDTOs(),
                Value = entity.Value
            };
        }

        public static IEnumerable<OptionDTO> ToDTOs(this IEnumerable<Option> entities)
        {
            var result = new List<OptionDTO>();
            foreach (var i in entities)
            {
                result.Add(i.ToDTO());
            }

            return result;
        }

        public static OptionDTO ToDTO(this Option entity)
        {
            return new OptionDTO()
            {
                Id = entity.Id,
                Value = entity.Value
            };
        }


        public static IEnumerable<PlayerDTO> ToDTOs(this IEnumerable<Leaderboard> entities)
        {
            var result = new List<PlayerDTO>();
            foreach (var i in entities)
            {
                result.Add(i.ToDTO());
            }

            return result;
        }

        public static PlayerDTO ToDTO(this Leaderboard entity)
        {
            return new PlayerDTO()
            {
                DateCreated = entity.DateCreated,
                Name = entity.Name,
                Result = entity.Result,
                SuccessfullyAnswered = entity.SuccessfullyAnswered
            };
        }
    }
}
