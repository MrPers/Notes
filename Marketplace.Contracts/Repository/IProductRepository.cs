﻿using Marketplace.DB.Models;
using Marketplace.DTO.Models;
using System;

namespace Marketplace.Contracts.Repository
{
    public interface IProductRepository : IBaseRepository<Product, ProductDto, Guid>
    {
        //Task<ICollection<Guid>> GetUsersIdOnGroupAsync(Guid groupId);
        //Task SubscriptionToGroupsAsync(Guid groupId, Guid userId);
        //Task UnsubscriptionToGroupsAsync(Guid groupId, Guid userId);
    }
}
