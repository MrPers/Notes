using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Notes.Application.Notes.Commands.CreateNote
{
    public class CreateNoteCommandHandler
        : IRequestHandler<CreateNoteCommand, Guid>
    {
        public async Task<Guid> Handle(CreateNoteCommand command,
            CancellationToken cancellationToken)
        {
            var note = new Note
            {

            }
        }
    }
}
