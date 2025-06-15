using Notes.Application.Notes.Queries.GetNoteDetails;
using System.Collections.Generic;

namespace Notes.Application.Notes.Queries.GetNoteDetailsList
{
    public class NoteDetailsListVm
    {
        public IList<NoteDetailsDto> Notes { get; set; }
    }
}
