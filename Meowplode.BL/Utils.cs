using System;
using System.Collections.Generic;

namespace Meowplode.BL
{
    public static class Utils
    {
        private static Random rng = new Random();

        /// <summary>
        /// https://stackoverflow.com/a/1262619 with a little spice of Linq
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="list"></param>
        /// <returns></returns>
        public static IEnumerable<T> Shuffle<T>(this IList<T> list)
        {
            int n = list.Count;
            var l = new T[n];
            list.CopyTo(l, 0);
            while (n > 1)
            {
                n--;
                int k = rng.Next(n + 1);
                T value = l[k];
                l[k] = l[n];
                l[n] = value;
            }

            return l;
        }
    }
}
