﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Marketplace.Angular.Models
{
    public class ProductVM
    {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Photo { get; set; }
        public Guid ProductGroupID { get; set; }
    }
}