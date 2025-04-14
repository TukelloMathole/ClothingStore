using Microsoft.AspNetCore.Identity;

namespace UserService.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; }
        public string Style { get; set; }
        public bool Subscribe { get; set; }
    }
}
