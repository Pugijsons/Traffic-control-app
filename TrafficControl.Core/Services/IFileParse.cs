using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace TrafficControl.Core.Services
{
    public interface IFileParse
    {
        public List<string> ConvertFileToList(IFormFile file);
    }
}