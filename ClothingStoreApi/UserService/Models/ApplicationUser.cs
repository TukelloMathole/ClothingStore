using Microsoft.AspNetCore.Identity;

namespace UserService.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        // You can also add more custom properties if needed
        // public DateTime DateOfBirth { get; set; }
        // public string ProfileImageUrl { get; set; }
    }
}
