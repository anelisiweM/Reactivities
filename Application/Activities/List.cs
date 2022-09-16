using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>>{}
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _Context;
        //    private readonly ILogger<List> _Logger;
    
            public Handler(DataContext context)
            {
            _Context = context;
         //   _Logger = logger;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                // try
                // {
                //     for (int i = 0; i < 10; i++)
                //     {
                //         cancellationToken.ThrowIfCancellationRequested();
                //         await Task.Delay(1000, cancellationToken);
                //         _Logger.LogInformation($"Task {i} has completed");
                //     }
                // }
                // catch (Exception ex)
                // {
                //     _Logger.LogInformation("Task was cancelled");
                //     //throw;
                // }

               return await _Context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}