﻿using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityModel;

namespace Notes.Identity
{
    public static class Configuration
    {
        public static IEnumerable<ApiScope> ApiScopes =>
            new List<ApiScope>
            {
                new ApiScope("notes_scope"),
            };

        public static IEnumerable<IdentityResource> IdentityResources =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            };

        public static IEnumerable<ApiResource> ApiResources =>
            new List<ApiResource>
            {
                new ApiResource("notes_resource"),
            };

        public static IEnumerable<Client> Clients =>
            new List<Client>
            {
                new Client
                {
                    ClientId = "client_id_notes",
                    ClientSecrets = { new Secret("client_secret_notes".ToSha256()) },
                    AllowedGrantTypes =  GrantTypes.ResourceOwnerPassword,
                    AllowedCorsOrigins = { "https://localhost:5001" },
                    AllowedScopes =
                    {
                        "notes_scope",
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile
                    }
                },
            };
    }
}
