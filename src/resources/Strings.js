const Strings = () => {
    return ({
        app: {
            name: "P3 Web App"
        },
        navBar: {
            dashboard: "Dashboard",
            ganttChart: "Gantt Chart",
            kanban: "Kanban board",
            login: "Login",
            register: "Register",
            logout: "Logout",
            users: "Users",
            projects: "Projects"
        },
        register: {
            name: "Register",
            email: "Email",
            password: "Password",
            create: "Create Account",
            passwordConfirmation: "Confirm your password",
            passDontMatch: "Passwords don't match",
            addPassword: "Please add your password",
            passLowerThanSix: "Please add a password with 6 characters or more"
        },
        login: {
            name: "Login",
            email: "Email",
            password: "Password",
            invalidEmail: "Invalid email",
            invalidAccount: "Invalid account"
        },
        errorPage: {
            message: "Please return to the app",
            message2: "What to create some notes?",
            error: "Error 404! Page not found",
            home: "Back to home"
        },
        projects: {
            new: "New project",
            name: "Projects",
            viewProjects: "Projects",
            create: "Add project",
            title: "Project title",
            portfolio: "Portfolio / Program",
            sponsor: "Sponsor",
            projectTeam: "Project Team",
            projectManager: "Project Manager",
            month: "Month",
            projectDescription: "Project description",
            deliverablesMap: "Deliverables map",
            projectSchedule: "Project schedule",
            followUpRegister: "Follow up register",
            healthRegister: "Health register",
            lessonsLearned: "Lessons learned",
            projectBudget: "Project budget",
        },
        portfolios: {
            new: "New portfolio",
            name: "Portfolios",
            viewPortfolios: "View portfolios",
            create: "Create portfolio"
        },
        users: {
            new: "New user",
            name: "Users",
            viewUsers: "View users",
            create: "Create user"
        },
        dropdowns: {
            companyName: "Company Name"
        }
    })
}

export default Strings();