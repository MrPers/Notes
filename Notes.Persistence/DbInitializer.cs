namespace Notes.Persistence
{
    public class DbInitializer
    {
        //checks the initialized database, if not, initializes the database
        public static void Initialize(NotesDbContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
