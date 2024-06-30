using System;
using MediatR;
using Notes.Application.Notes.Queries.GetNoteDetails;
using Notes.Application.Notes.Queries.GetNoteList;

namespace Notes.Application.Notes.Queries.GetNoteDetailsList
{
    public class GetNoteDetailsListQuery : IRequest<NoteDetailsListVm>
    {
        public Guid UserId { get; set; }
        public Guid Id { get; set; }
    }
}
