using System;
using FluentValidation;

namespace Notes.Application.Notes.Queries.GetNoteDetailsList
{
    public class GetNoteDetailsListQueryValidator : AbstractValidator<GetNoteDetailsListQuery>
    {
        public GetNoteDetailsListQueryValidator()
        {
            RuleFor(x => x.UserId).NotEqual(Guid.Empty);
        }
    }
}
