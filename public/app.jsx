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
        this.getDOMNode().scrollTop = $(window.location.hash).offset().top;
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
                        <h2 id="lab">amazon lab126</h2>
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
                        <h2 id="xray">u of m medical imaging</h2>
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
                        <h2 id="nuubo">nuubo</h2>
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
                            the source is hosted on GitHub <a target="_blank" href="https://github.com/shamgang/resume">here</a>.
                        </p>
                        <p>
                            I recently built an internal website at Amazon using Angular and Ruby on Rails.
                            Prior to that, I was responsible for a redesign of
                            {'\u00a0'}<a target="_blank" href="https://www.recourse.co">Recourse.co</a>
                            {'\u00a0'}with a particular focus on responsiveness and cross-device compatibility.
                            I have also worked on personal projects, including an event tracking and crowdfunding
                            website built with APIs from Google Maps, Stripe, and Facebook.
                        </p>
                        <h2 id="android">android</h2>
                        <p>
                            I worked extensively with Android when developing for the Fire TV at Amazon. I worked daily
                            with a very large Android code base, working on UI as well low-level concerns such as
                            graphics and USB on the Android platform. I developed Java/Android code in Android Studio
                            with Gradle for UI development and I worked with C++, the Android NDK, JNI, and CMake for
                            system-level development.

                            I have also experimented with Android personally and have created a prototype of an app
                            for tracking events using the Google Maps, Stripe, and Facebook Android APIs, in tandem
                            with the aforementioned web project.
                        </p>
                        <h2 id="c++">C/C++</h2>
                        <p>
                            I have studied C and C++ throughout my coursework and have used these languages extensively
                            in projects and in industry. In coursework, I have implemented many data structures
                            and algorithms in C++, as well as operating system, file system, and distributed system
                            functionality. I also worked with many C++ experts developing a large-scale, high-quality
                            C++ code base at Amazon. I have used C to implement image processing,
                            real-time DSP, embedded system communication, and processor simulation.
                        </p>
                        <h2 id="dsp">digital signal processing</h2>
                        <p>
                            As part of my computer engineering coursework I've studied both analog
                            and digital signal theory as well as applications of digital signal processing. My senior
                            design project was an embedded system for processing, visualizing, and analyzing music
                            signals. I produced this demo video of the project:
                        </p>
                        <iframe className="youtube"
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
                        <iframe className="youtube"
                            src="//www.youtube.com/embed/Hl607Lvl_D4?rel=0&showinfo=0&autohide=1&start=260" frameborder="0" allowfullscreen>
                        </iframe>
                        <p>
                            This was my first experience with programming and it involved GUI creation, pitch detection,
                            and digital synthesis.
                        </p>
                        <h2 id="embedded">embedded systems</h2>
                        <p>
                            I worked with embedded systems in my senior project, using a microcontroller, two DSP chips,
                            an FPGA, and a combination of analog, SPI, I2C, I2S, and VGA communication. See more above
                            in the <a href="#dsp">DSP</a> section.
                        </p>
                        <h2 id="parallel">parallel computing</h2>
                        <p>
                            I worked with GPU parallel computing for performance optimization at
                            {'\u00a0'}<a href="#nuubo">Nuubo</a> and <a href="#xray">UofM</a>. I have also worked with
                            parallelism in operating systems coursework building a concurrent disk scheduler,
                            a thread library, an external pager, and a distributed file system.
                        </p>
                        <h2 id="cvml">cv and ml</h2>
                        <p>
                            I have studied computer vision and machine learning in my coursework. In computer vision I
                            implemented projects in demosaicing and auto-alignment, height map reconstruction using
                            photometric stereo, blob detection, panorama stitching using feature extraction and RANSAC,
                            and handwritten digit recognition using convolutional neural networks, all in MATLAB.
                            In machine learning, I studied linear classifiers and regression, support vector machines,
                            decision trees, ensemble methods, collaborative filtering for recommender problems,
                            clustering, and generative models. I implemented a tweet classifier to decide whether
                            tweeted reviews are positive or negative using SVMs and cross-validation. I implemented
                            facial image clustering using principal component analysis, K-means/medioids and
                            hierarchical clustering. I built a parts-of-speech tagger using mixture models. I
                            implemented all of this functionality in Python with the help of the scikit-learn and
                            pyplot libraries.
                        </p>
                        <h2 id="agile">agile</h2>
                        <p>
                            I have worked in three separate occasions on teams practicing agile development. I am
                            well acquainted with sprint planning, Scrum, and task/story workflows and I use these
                            practices to organize, plan, and track my own and my team's development.
                        </p>
                        <h1 id="music">music</h1>
                        <p>
                            {'\u00a0\u00a0'} I am a sound engineer, music producer, computer musician, music programmer,
                            composer, and performer. I study performing arts technology at the University of Michigan with a
                            focus in sound engineering. My coursework includes composition, computer music, sound
                            recording, sound reinforcement, studio production, sound for theater, and jazz improvisation.
                            I work on the audio/video staff at the university's
                            {'\u00a0'}<a href="http://www.lib.umich.edu/audio-studio-digital-media-commons">audio</a> and
                            {'\u00a0'}<a href="http://www.lib.umich.edu/video-studio-digital-media-commons">video</a> studios
                            at the Duderstadt Center, which involves installing and maintaining industry-grade
                            equipment, teaching training classes in the studios, and working on
                            university audio and video recording projects. I have been a performer on
                            piano, guitar, bass, and drums for about a decade and I have played jazz and other
                            styles in a professional setting.
                        </p>
                        <h2 id="production">production/engineering</h2>
                        <p>
                            As a producer/sound engineer I have recorded many groups and individuals in the university
                            studios using the API Vision consoles and a large selection of recording and
                            processing gear. I use software like Ableton Live, Pro Tools, Logic, Final Cut, and Melodyne
                            for recording, editing, and mixing. I recently brought in a jazz band to record a demo
                            for the Jazz Ahead residency application. Those tracks are below.
                        </p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228967429%3Fsecret_token%3Ds-decyS&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228967498%3Fsecret_token%3Ds-wvvWY&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228967439%3Fsecret_token%3Ds-X3VUx&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228967605%3Fsecret_token%3Ds-9v2Uu&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <p>
                            I am also familiar with a more in-the-box home studio approach.
                            Recently, I recorded vocals for a mixtape using a low-cost
                            bedroom rig and then completed the production both at home and in the university studios.
                            Those tracks are below:
                        </p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227708877&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227708873&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227708868&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227708865&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227708861&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227708856&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <p>
                        A lot of the recordings I've done in the past few years have yet to be
                            released as part of artists' larger projects, but some projects I worked on years ago
                            before studying sound engineering are available:
                        </p>
                        <p>
                            "D.I.Y." is a jazz track that I composed in 2012 for a four-piece jazz band, and proceeded
                            to perform, record, mix, and edit on my own.
                        </p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/170481522&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <p>
                            Below are some other tracks I recorded and mixed at that time during my first exploration
                            of the studio. I performed Concerto Romantique, and played bass on the other two tracks.
                        </p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173370075&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173370258&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173370369&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <p>
                            I have also worked on some sound for video. I produced both the video and audio for the
                            EECS 452 project demo video as shown above in the <a href="#dsp">DSP</a> section. I also
                            did a re-edit of this video for the U of M Campus Farm. I was responsible for re-recording
                            narration, doctoring the pre-mixed audio that could not be re-recorded, and then re-editing
                            and mixing the parts for better audibility and flow. I also worked on some of the video editing
                            and added credits in Final Cut.
                        </p>
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/bguLtEvmgGQ">
                        </iframe>
                        <p>
                            Some more of my production work is included in the composition section below.
                        </p>
                        <h2 id="composition">composition</h2>
                        <p>
                            In addition to recording and mixing, I like to compose for both instruments and the computer.
                            I use tools like DAWs, Max/MSP, Sibelius, Blender, Unity, and web code for composing.
                            Below are some compositions I have made in my coursework. The field compositions are made
                            entirely of recordings from a stereo portable recorder. "Mthmtcs" is made from both recordings
                            and software instruments, and "Hydroculture" is made entirely from one short "seed" of MIDI
                            information manipulated in various ways.
                        </p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182283929&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182281518&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182279372&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182282519&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <p>
                            Here are a few compositions of mine for instruments. I wrote "DIY" for guitar, bass, and piano,
                            and a recording can be found above in the <a href="#production">production</a> section.
                            I wrote "White Knuckles" for piano as part of a composition class, and it explores frantic
                            dissonance, moving in and out of tonality, and complex linear two-hand rhythms.
                        </p>
                        <iframe width="100%" height="480"
                            src="https://drive.google.com/a/umich.edu/file/d/0B2vw2frJrQnRVXFuUFp3TTZSOEk/preview">
                        </iframe>
                        <iframe width="100%" height="480"
                            src="https://drive.google.com/file/d/0B2vw2frJrQnRd211TUZCdXJzTTg/preview">
                        </iframe>
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
                    { text: 'amazon lab126', hash: 'lab'},
                    { text: 'medical imaging', hash: 'xray'},
                    { text: 'nuubo', hash: 'nuubo'},
                    { text: 'web', hash: 'web' },
                    { text: 'android', hash: 'android' },
                    { text: 'C/C++', hash: 'c++' },
                    { text: 'dsp', hash: 'dsp' },
                    { text: 'embedded systems', hash: 'embedded' },
                    { text: 'parallel computing', hash: 'parallel' },
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
