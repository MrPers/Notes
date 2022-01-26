﻿Add-Migration Initial -Context DataContext -OutputDir Data/DataDb
Update-Database -Context DataContext
Add-Migration PersistedGrantDbMigration -Context PersistedGrantDbContext -OutputDir Data/PersistedGrantDb
Update-Database -Context PersistedGrantDbContext
Add-Migration ConfigurationDbMigration -Context ConfigurationDbContext -OutputDir Data/ConfigurationDb
Update-Database -Context ConfigurationDbContext

Update-Database -Context DataContext
Update-Database -Context PersistedGrantDbContext
Update-Database -Context ConfigurationDbContext

Drop-Database -Context DataContext

//Test1@gmail.com
//12qw!Q

{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "userName": "Test1",
  "password": "12qw!Q",
  "email": "Test@ukr.net"
}

Add-Migration PersistedGrantDbMigration -StartupProject Marketplace.Web -Context PersistedGrantDbContext -OutputDir Marketplace.DB/Data/PersistedGrantDb

dotnet ef --project Marketplace.DB --startup-project Marketplace.Web migrations add PersistedGrantDbMigration -c PersistedGrantDbContext

dotnet ef -r Marketplace.DB --startup-project Marketplace.Web migrations add PersistedGrantDbMigration -c PersistedGrantDbContext

Успех:

return Ok() ← Код статуса HTTP 200
return Created() ← Код статуса HTTP 201
return NoContent(); ← Код статуса HTTP 204
Ошибка клиента:

return BadRequest(); ← Код статуса HTTP 400
return Unauthorized(); ← Код статуса HTTP 401
return NotFound(); ← Код статуса HTTP 404