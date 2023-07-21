using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.IO;
using TrafficControl.Core.Services;

namespace TrafficControl.Services
{
    public class FileParse : IFileParse
    {


        public List<string> ConvertFileToList(IFormFile file)
        {
            List<string> lines = new List<string>();

            using (var reader = new StreamReader(file.OpenReadStream()))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    lines.Add(line);
                }
            }

            return lines;
        }

    }
}
