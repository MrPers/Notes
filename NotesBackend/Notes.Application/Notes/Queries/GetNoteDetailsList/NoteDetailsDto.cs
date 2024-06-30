using AutoMapper;
using Notes.Application.Common.Mappings;
using Notes.Application.Notes.Queries.GetNoteDetails;
using Notes.Domain;
using System;
using System.Collections.Generic;

namespace Notes.Application.Notes.Queries.GetNoteDetailsList
{
    public class NoteDetailsDto : IMapWith<Note>
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Details { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Note, NoteDetailsDto>()
                .ForMember(noteVm => noteVm.Title,
                    opt => opt.MapFrom(note => note.Title))
                .ForMember(noteVm => noteVm.Details,
                    opt => opt.MapFrom(note => note.Details))
                .ForMember(noteVm => noteVm.Id,
                    opt => opt.MapFrom(note => note.Id));
        }
    }
}
