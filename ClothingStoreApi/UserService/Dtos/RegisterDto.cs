namespace UserService.Dtos
{
    public class RegisterDto
    {
        public string FullName { get; set; }           // From fullName
        public string Username { get; set; }           // From username
        public string Email { get; set; }              // From email
        public string Password { get; set; }           // From password
        public string ConfirmPassword { get; set; }    // From confirmPassword
        public string Phone { get; set; }              // From phone
        public string Gender { get; set; }             // From gender (e.g. Male, Female, etc.)
        public DateTime? DateOfBirth { get; set; }     // From dob
        public string Address { get; set; }            // From address
        public string Style { get; set; }              // From style (e.g. Casual, Formal, etc.)
        public bool Subscribe { get; set; }            // From subscribe checkbox
    }

}
