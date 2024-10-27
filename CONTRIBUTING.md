# Contribution Guidelines
We welcome contributions to enhance RentRoll! Please follow these guidelines to ensure a smooth development process:

## Issues and Feature Requests
- **Search Existing Issues**: Before creating a new issue, please check if someone else has already reported it.
- **Detailed Descriptions**: When opening an issue, clearly describe the problem or feature request, including any relevant screenshots or error logs.
## Setting Up a Local Development Environment
1. **Fork the Repository**: First, fork the repository on GitHub and clone your fork locally.
```bash
git clone https://github.com/yourusername/rentroll.git
```

2. **Create a Branch**: Use a descriptive name for your branch, e.g., fix-login-issue or feature-payment-notification.
```bash
git checkout -b branch-name
```

3. **Make Changes**: Work on your feature or bug fix. Ensure code quality and check for linting errors.

4. **Testing**: Test your changes thoroughly in the Android simulator or an Android device. Make sure the app functions as expected without introducing new bugs.

5. **Commit**: Write clear and concise commit messages.
```bash
git commit -m "Fixed login issue by updating authentication flow"
```

6. **Push**: Push the branch to your forked repository.
```bash
git push origin branch-name
```
7. **Create a Pull Request (PR)**: Open a PR to the main branch. Include the following in your PR:

- A detailed description of the change
- Any issues the PR addresses
- Steps to test the changes (if applicable)
## Code Style and Best Practices
- Follow JavaScript and React Native best practices.
- Use meaningful names for variables, functions, and components.
- Keep components small and focused. Reusable components are preferred.
- Avoid inline styles; use StyleSheet instead.
## Review Process
Once your PR is submitted, it will be reviewed by project maintainers. You may be asked to make changes before it can be merged. Please be responsive to feedback, and thank you for your contribution!