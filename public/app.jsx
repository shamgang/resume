/* app.jsx */
// Helper functions
function fadeIn(ref) {
    // Fade node in after four seconds for one second
    var $node = $(ref.getDOMNode());
    setTimeout(function() {
        $node.animate({
            opacity: 1
        }, 1000);
    }, 4000);
}
// Disable animated scrolling for now because subheading clicks are badly defined
/*
function scrollToName(elementName) {
    // Scroll to indicated heading
    // Use name rather than id to avoid default anchor link behavior
    var target_selector = '[name=\'' + elementName + '\']';
    console.log(target_selector);
    var target_top = $(target_selector).position().top;
    $('.mainContent').animate({ scrollTop: target_top}, 1500);
}
*/
// React classes
var Portrait = React.createClass({
    componentDidMount: function() {
/*
        // Animate portrait from full screen to top center after 2 seconds
        var $portraitImage = $(this.refs.portraitImage.getDOMNode());
        setTimeout(function() {
            $portraitImage.animate({
                width: '15em',
                height: '10em'
            }, 2000);
        }, 2000);
        // Animate speech bubble opacity in and out during first 2 seconds
        var $speechBubble = $(this.refs.speechBubble.getDOMNode());
        $speechBubble.animate({
            opacity: 1
        }, 1000, function() {
            $speechBubble.animate({
                opacity: 0
            }, 1000)
        });
*/
    },
    render: function() {
        // Portrait element contains nested images of a portrait and a speech bubble
        return (
            <a href="#splash">
                <div ref="portraitImage" className="portrait">
                    <div ref="speechBubble" className="speech"></div>
                </div>
            </a>
        );
    }
});
var NavGroup = React.createClass({
    getInitialState: function() {
        // Initialize closed: no background color, down arrow, no sublinks
        return {
            classes: 'navGroup',
            arrowSrc: 'downarrow.png',
            navLinks: [],
            open: false
        };
    },
    handleClick: function(event) {
        if(this.state.open) {
            // If open, close by removing sublinks, background color and using the down arrow image
            this.setState({
                classes: 'navGroup',
                arrowSrc: 'downarrow.png',
                navLinks: [],
                open: false
            });
        }
        else {
            // If closed, scroll and open by adding sublinks, setting a background color and using the up arrow

            var navLinks = this.props.data.subheadings.map(function(navLink, index) {
                return(
                    <a key={index} href={'#' + navLink.hash}>
                        <div className="navLink">
                            {navLink.text}
                        </div>
                    </a>
                );
            });

            this.setState({
                classes: 'navGroup opened',
                arrowSrc: 'uparrow.png',
                navLinks: navLinks,
                open: true
            });

            // Scroll to corresponding content
            //scrollToName(this.props.data.hash);
        }
    },
    render: function() {
        // NavGroup element contains a heading link with an arrow image and a list of subheading links
        return(
            <div>
                <a href={'#' + this.props.data.hash}>
                    <div className={this.state.classes} onClick={this.handleClick}>
                        {this.props.data.text}
                        <img src={this.state.arrowSrc} className="arrowImg" />
                    </div>
                </a>
                {this.state.navLinks}
            </div>
        );
    }
});
var NavBar = React.createClass({
    componentDidMount: function() {
        // Fade navbar in after 4 seconds
        //fadeIn(this.refs.navBar);
    },
    render: function() {
        // NavBar element contains a title and a list of NavGroups

        var navGroups = this.props.data.map(function(navGroup, index) {
            return(
                <NavGroup key={index} data={navGroup}/>
            );
        });

        return(
            <div ref="navBar" className="navBar">
                <a href="#me">
                    <div className="navTitle">SHAMIK GANGULY</div>
                </a>
                {navGroups}
                <div className="navPad"></div>
            </div>
        );
    }
});

var MainContent = React.createClass({
    componentDidMount: function() {
        // Fade main content in after 4 seconds
        //fadeIn(this.refs.mainContent);
    },
    render: function() {
        // MainContent element contains a splash and scrolling content organized by headings and subheadings
        return(
            <div ref="mainContent" className="mainContent">
                <div className="mainScroller">
                    <div id="splash" className="splash">
                        hi, i'm Shamik.
                    </div>
                    <div className="mainText">
                        <h1 id="me">me</h1>
                        <p>
                            {'\u00a0\u00a0'} Hi, I'm Shamik. I'm from Southeast Michigan and I go to the University of
                            Michigan in Ann Arbor. I study computer engineering and sound engineering at school and I
                            work as a product builder, software engineer, UI developer, musician, composer, and sound
                            engineer.
                        </p>
                        <h1 id="software">software</h1>
                        <p>
                            {'\u00a0\u00a0'} I write software to build products, create experiences, and break technical
                            barriers. I regularly use C, C++, Python, MATLAB, JavaScript, HTML/CSS, and Java/JNI and
                            I've also used OpenCL, SQL, PHP, C&#35;, and Ruby. I've worked in development environments
                            in Linux, Mac, and Windows, using Bash, Make, CMake, Gradle, IntelliJ, Unity, and Code Composer.
                            In industry, I've worked on consumer devices, web and mobile applications, and
                            native UIs and application frameworks. In the process I have learned and applied skills in
                            object-oriented programming, multi-threaded CPU programming, graphics, massively parallel
                            computation, web design and development, Android UI and platform, performance benchmarking,
                            and cross-platform build systems. In academia I have studied and implemented operating
                            systems, machine learning, computer vision, digital signal processing, embedded systems,
                            data structures and algorithms, and processor design, and I have researched optimizations
                            in X-Ray computed tomography using concepts in 3D mathematics and linear algebra
                            implemented with GPUs.
                        </p>
                        <h2 id="lab">Amazon Lab126</h2>
                        <p>
                            I've spent the last two summers as a software development intern at Amazon's Lab126. Last
                            summer, I worked on the Fire TV, prototyping features related to graphics, application
                            cacheing, USB storage, and benchmarking, which also had implications for the then-unreleased Fire TV
                            Stick. I also worked on the main Android UI. I spent time with Android, Java, JNI,
                            C/C++, CMake, Android NDK toolchains, Android Studio, Gradle, and Git. This summer, I worked
                            on a yet unreleased product, designing tools for development and data collection. I designed
                            and built a many-threaded UI in C++ using Qt, CMake to enable user-friendly presentation and
                            analysis of complex product code modules. I also designed and built a website for subjective
                            data collection using HTML5, CSS, and AngularJS in a Ruby on Rails environment. I also
                            worked with Java and JNI to implement cloud interfaces.
                        </p>
                        <h2 id="xray">UofM Medical Imaging</h2>
                        <p>
                            During my sophomore summer I worked on a team headed by the internationally acclaimed
                            {'\u00a0'}<a target="_blank" href="http://web.eecs.umich.edu/~fessler/">Professor Jeffrey Fessler</a>
                            {'\u00a0'}researching methods for X-ray computed tomography that
                            significantly outperform status quo methods with the help of parallel computing on GPUs.
                            This involved analyzing current research in medical imaging in order to devise massively
                            parallel algorithms from applicable linear algebra formulae, and then implementing those
                            algorithms using both C and OpenCL for optimal cooperation between the CPU and GPUs.
                            This project involved heavy optimization, with every line of code written to maximize
                            efficiency with respect to the hardware.
                        </p>
                        <h2 id="nuubo">Nuubo</h2>
                        <p>
                            During my freshman summer I worked in Madrid at a wearable medical technology startup called
                            {'\u00a0'}<a target="_blank" href="http://www.nuubo.com/">Nuubo</a> that has created
                            an EKG in the form of an undershirt. I worked on porting libraries to the GPU using
                            OpenCL to investigate performance improvements. I worked in a Spanish-speaking office
                            and became conversational in Spanish during this time.
                        </p>
                        <h2 id="web">web</h2>
                        <p>
                            I've been involved with web development for personal and professional projects.
                            Besides the obvious use of JavaScript, HTML, and CSS, I use Angular, React, Node, jQuery,
                            Ruby on Rails, Bootstrap, Foundation, SQL, and PHP. I often use IntelliJ-based IDEs and
                            I've used Grunt for task running. This website is one example of my web development, and
                            the source is hosted on GitHub here TODO.
                        </p>
                        <p>
                            I recently built an internal website at Amazon using Angular and Ruby on Rails.
                            Prior to that, I was responsible for a redesign of
                            {'\u00a0'}<a target="_blank" href="https://www.recourse.co">Recourse.co</a>
                            {'\u00a0'}with a particular focus on responsiveness and cross-device compatibility.
                            I have also worked on personal projects, including an event tracking and crowdfunding
                            website built with APIs from Google Maps, Stripe, and Facebook TODO.
                        </p>
                        <h2 id="android">android</h2>
                        <p>
                            I worked extensively with Android when developing for the Fire TV at Amazon. I worked daily
                            with a very large Android code base, working on UI as well low-level concerns such as
                            graphics and USB on the Android platform. I developed Java/Android code in Android Studio
                            with Gradle for UI development and I worked with C++, the Android NDK, JNI, and CMake for
                            system-level development.
                        </p>
                        <h2 id="c++">C/C++</h2>
                        <p>
                            {'\u00a0\u00a0'}
                        </p>
                        <h2 id="dsp">digital signal processing</h2>
                        <p>
                            {'\u00a0\u00a0'} As part of my computer engineering coursework I've studied both analog
                            and digital signal theory as well as applications of digital signal processing. My senior
                            design project was an embedded system for processing, visualizing, and analyzing music
                            signals. I produced this demo video of the project:
                        </p>
                        <iframe
                            src="//www.youtube.com/embed/lzsdMJA22CA?rel=0&showinfo=0&autohide=1" frameborder="0" allowfullscreen>
                        </iframe>
                        <p>
                            The project involved real-time effects processing, note and key detection, graphics
                            programming, serial inter-device communication, and circuit design using tools such as
                            TI DSP chips and microcontrollers, Altera FPGAs, MATLAB, C, I2C, I2S, SPI, UART, Verilog, soldering,
                            laser cutters, machine presses, SolidWorks, Code Composer Studio, oscilloscopes, and
                            function generators. The algorithm implementations are hosted on GitHub
                            {'\u00a0'}<a target="_blank" href="https://github.com/shamgang/mpsembedded">here</a>.
                        </p>
                        <p>
                            My freshman year, I created a music synthesizer and transcriber in MATLAB. The presentation
                            video for that project is here:
                        </p>
                        <iframe
                            src="//www.youtube.com/embed/Hl607Lvl_D4?rel=0&showinfo=0&autohide=1&start=260" frameborder="0" allowfullscreen>
                        </iframe>
                        <p>
                            This was my first experience with programming and it involved GUI creation, pitch detection,
                            and digital synthesis.
                        </p>
                        <h1 id="music">music</h1>
                        <p>
                            {'\u00a0\u00a0'}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});
var MainContainer = React.createClass({
    render: function() {
        // MainContainer element contains the Portrait, NavBar, and MainContent
        // It stores the model that populates the NavBar

        var navData = [
            {
                text: 'software',
                hash: 'software',
                subheadings: [
                    { text: 'Amazon Lab126', hash: 'lab'},
                    { text: 'Medical Imaging', hash: 'xray'},
                    { text: 'Nuubo', hash: 'nuubo'},
                    { text: 'C/C++', hash: 'c++' },
                    { text: 'web', hash: 'web' },
                    { text: 'android', hash: 'android' },
                    { text: 'embedded systems', hash: 'embedded' },
                    { text: 'parallel computing', hash: 'parallel' },
                    { text: 'dsp', hash: 'dsp' },
                    { text: 'cv and ml', hash: 'cvml' },
                    { text: 'agile', hash: 'agile' }
                ]
            },
            {
                text: 'music',
                hash: 'music',
                subheadings: [
                    { text: 'production/engineering', hash: 'production' },
                    { text: 'composition', hash: 'composition' },
                    { text: 'performance', hash: 'performance' }
                ]
            },
            {
                text: 'writing',
                hash: 'writing',
                subheadings: [
                    { text: 'Michigan Daily', hash: 'daily'},
                    { text: 'essays', hash: 'essays'}
                ]
            }
        ];

        return(
            <div className="mainContainer">
                <Portrait />
                <NavBar data={navData} />
                <MainContent />
            </div>
        );
    }
});
// Render the container
React.render(
    <MainContainer />,
    document.getElementById('content')
);
