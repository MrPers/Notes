﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Marketplace.Web.Models
{
    public class ProductVM
    {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Photo { get; set; }
        public string ProductGroupName { get; set; }
    }
}