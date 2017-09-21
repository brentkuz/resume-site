//Test Comment
//static models used in Projects page
my.projects = {
    gm: {
        title: 'Group Manager',

        role: 'Developer',

        tech: 'ASP.NET MVC, C#, KnockoutJS, ADO.NET, Sql Server',

        overview: `
            <ul>
                <li>Developed a web app to work with the district's Group Security/Single Sign-on system, to allow power users to manage groups and create automation rules.</li>
                <li>Constructed the app in 3 tiers: a KnockoutJS client app, an MVC server app, and a Sql Server database.</li>
                <li>Utilized multithreading to optimize a slow process resulting in a speed-up from ~7 sec to ~500 ms.</li>
                <li>Created a recursive JavaScript Navigation Tree widget, constructed using a spinoff of the abstract factory pattern.</li>
            </ul>
        `,        

        link: [],

        request: false
    },


    hr: {
        title: 'Homeless Referral',

        role: 'Developer, Analyst, Project Lead',

        tech: 'ASP.NET MVC, C#, KnockoutJS, ADO.NET, Sql Server',

        overview: `
            <ul>
                <li>Developed a web app for district staff to refer homeless students to homeless services facilitated by district homeless liasons.</li>
                <li>3-tier architecture: KnockouJS client app, MVC server app, Sql server</li>
                <li>Utilized the Command Query Responsibility Segregation pattern to encapsulate complex existing Sql statements.</li>
                <li>Created an XML-based document storage component to store community documents</li>                
            </ul>
        `,

        link: [],

        request: false
    },


    dp: {
        title: 'District Photo System',

        role: 'Developer, Analyst',

        tech: 'PowerShell, Sql Server',

        overview: `
            <ul>
                <li>Developed a system, focused on process improvement, to streamline storage, vlaidation, and distribution of staff and student photos to various systems and consumers.</li>
                <li>Utilized modular PowerShell</li>
                <li>Leveraged Task Scheduler for automation</li>
                <li>Currently processed over 60k photos</li>
            </ul>
        `,

        link: [],

        request: false
    },


    hrc: {
        title: 'HR Center (in progress)',

        role: 'Developer, Analyst',

        tech: 'ASP.NET MVC, Entity Framework, SignalR, Sql Server',

        overview: `
            <ul>
                <li>Took over development on a failed third-party software endeavor.</li>
                <li>Implemented Full-text Indexing at the database and a DbContext Command Interceptor to replace Sql "LIKE" statements with "CONTAINS" to utilize indexing. One piece of functionality went from taking >30 sec to ~3 sec.</li>
                <li>Fixed a notoriously unreliable email scraper service (Windows Service) to gracefully dispose and re-initialize it's core Exchange Web Service components when external dependencies fail.</li>
                <li>Fixed >50 bugs created by the original developers.</li>
                <li>Found and fixed a major security vulnerability (missing HTTPS binding) on the IIS server.</li>
            </ul>
        `,

        link: [],

        request: false
    },

    sw: {
        title: 'Social Work Referral',

        role: 'Developer, Analyst',

        tech: 'ASP.NET MVC, C#, AngularJS, Bootstrap, ADO.NET, Sql Server',

        overview: `
            <ul>
                <li>Developing a web app for district Social Workers to facilitate tracking and managing student social work cases.</li>
                <li>3-tier architecture: AngularJS client app, MVC server app, Sql server</li>
                <li>First app using AngularJS. Totally worth the switch from KnockoutJS!</li>
                <li>Leveraging ASP.NET routing between various AngularJS apps.</li>
                <li>Extensive development of AngularJS custom directives for UI components.</li>
                <li>Utilizing Unit of Work pattern for transaction support.</li>
                <li>Implemented a custom authorization provider to provide greater flexibility/configurability to feature access.</li>
            </ul>
        `,

        link: [],

        request: true
    },

    ss: {
        title: 'Suicide Screening (in progress)',

        role: 'Developer, Analyst',

        tech: 'ASP.NET MVC, C#, JavaScript, Bootstrap, Entity Framework, Sql Server',

        overview: `
            <ul>
                <li>Developing a web app for district Social Workers to manage and track cases for students dealing with suicial ideation.</li>
                <li>Utilizing server-side rendering for a change, relying heavily on ASP.NET @Html and @Ajax helpers.</li>
                <li>Extensive use of Bootstrap</li>
                <li>Utilizing Code-First Entity Framework w/ migrations.</li>                
            </ul>
        `,

        link: [],

        request: true
    },

    fb: {
        title: 'Filebackup (in progress)',

        role: 'Developer, Analyst',

        tech: '.NET, C#, Windows Service',

        overview: `
            <ul>
                <li>Developing a portable solution for backing up files not under typical source control. This ranges from PowerShell scripts on a process server being checked-in to TFS to files on my desktop being mirrored to an external drive.</li>
                <li>Decoupled and polymorphic design allowing for easy configuration of different repositories (e.g. file system, database, etc.)</li>
                <li>Utilizing Observer pattern to watch target files configured at runtime.</li>
            </ul>
        `,

        link: [{ title: 'FileBackup', url: 'https://github.com/brentkuz/file-backup' }, { title: 'Windows Service', url: 'https://github.com/brentkuz/file-backup' }],

        request: false
    }


};

