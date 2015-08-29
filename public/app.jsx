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
                            barriers. I regularly use C, C++, Python, MATLAB, JavaScript, HTML/CSS, Java/JNI and I've
                            also used OpenCL, SQL, PHP, C&#35;, and Ruby. I've worked in development environments in
                            Linux, Mac, and Windows, using Bash, Make, CMake, Gradle, IntelliJ, and Code Composer.
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
                        <h2 id="c++">C/C++</h2>
                        <p>
                            {'\u00a0\u00a0'}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h2 id="dsp">digital signal processing</h2>
                        <iframe width="100%" height="320"
                            src="//www.youtube.com/embed/lzsdMJA22CA?rel=0&showinfo=0&autohide=1" frameborder="0" allowfullscreen>
                        </iframe>
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
