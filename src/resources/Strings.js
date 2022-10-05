const Strings = () => {
    return ({
        app: {
            name: "P3 Express web app"
        },
        navBar: {
            dashboard: "Dashboard",
            ganttChart: "Gantt Chart",
            kanban: "Kanban board",
            login: "Login",
            register: "Register",
            logout: "Logout"
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
            invalidAccount: "Invalid Account"
        },
        errorPage: {
            message: "Please return to the app",
            message2: "What to create some notes?",
            error: "Error 404! Page not found",
            home: "Back to home"
        },
        projects: {
            new: "New Project",
            create: "Create Project",
            title: "Project Title",
            portfolio: "Portfolio / Program",
            sponsor: "Sponsor",
            projectTeam: "Project Team",
            projectManager: "Project Manager",
            month: "Month",
            projectDescription: "Project Description",
            deliverablesMap: "Deliverables Map",
            projectSchedule: "Project Schedule",
            followUpRegister: "Follow Up Register",
            healthRegister: "Health Register",
            lessonsLearned: "Lessons Learned",
            projectBudget: "Project Budget",

        }
    })
}

export default Strings();