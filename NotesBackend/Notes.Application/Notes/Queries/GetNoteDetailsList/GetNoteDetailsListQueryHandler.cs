using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Notes.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Notes.Application.Common.Exceptions;
using Notes.Domain;
using Notes.Application.Notes.Queries.GetNoteDetails;
using Notes.Application.Notes.Queries.GetNoteList;
using System.Linq;
using AutoMapper.QueryableExtensions;

namespace Notes.Application.Notes.Queries.GetNoteDetailsList
{
    public class GetNoteDetailsListQueryHandler
        : IRequestHandler<GetNoteDetailsListQuery, NoteDetailsListVm>
    {
        private readonly INotesDbContext _dbContext;
        private readonly IMapper _mapper;

        public GetNoteDetailsListQueryHandler(INotesDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<NoteDetailsListVm> Handle(GetNoteDetailsListQuery request,
            CancellationToken cancellationToken)
        {
            var notesQuery = await _dbContext.Notes
                .Where(note => note.UserId == request.UserId)
                .ProjectTo<NoteDetailsDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return new NoteDetailsListVm { Notes = notesQuery };
        }
    }
}
