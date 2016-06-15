<!DOCTYPE html>
<!-- saved from url=(0088)http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration -->
<html itemscope="" itemtype="http://schema.org/QAPage"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>node.js - Sails.js flash message for user registration - Stack Overflow</title>
    <link rel="shortcut icon" href="http://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d">
    <link rel="apple-touch-icon image_src" href="http://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a">
    <link rel="search" type="application/opensearchdescription+xml" title="Stack Overflow" href="http://stackoverflow.com/opensearch.xml">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:domain" content="stackoverflow.com">
    <meta property="og:type" content="website">    
    <meta property="og:image" itemprop="image primaryImageOfPage" content="http://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded&amp;a">
    <meta name="twitter:title" property="og:title" itemprop="title name" content="Sails.js flash message for user registration">
    <meta name="twitter:description" property="og:description" itemprop="description" content="I am following Sail.js tutorial from http://irlnathan.github.io/sailscasts/blog/2013/08/27/building-a-sails-application-ep4-handling-validation-errors-with-a-flash-message/

However I ran into a sm...">
    <meta property="og:url" content="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration">
    <link rel="canonical" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration">

    
    
    <script type="text/javascript" async="" src="http://engine.adzerk.net/ados?t=1465799597463&amp;request={%22Placements%22:[{%22A%22:22,%22S%22:8277,%22D%22:%22adzerk1519127823%22,%22AT%22:4,%22Z%22:[43]},{%22A%22:22,%22S%22:8277,%22D%22:%22adzerk1805822908%22,%22AT%22:4,%22Z%22:[44]},{%22A%22:22,%22S%22:8277,%22D%22:%22adzerk66198101%22,%22ATA%22:[5,17,2221],%22Z%22:[45]}],%22Keywords%22:%22node.js%2Cexpress%2Csails.js%22,%22Referrer%22:%22https%3A%2F%2Fwww.google.com%2F%22,%22IsAsync%22:true}"></script><script async="" src="./FlashService_files/quant.js"></script><script async="" src="./FlashService_files/beacon.js"></script><script async="" src="./FlashService_files/analytics.js"></script><script type="text/javascript" async="" src="./FlashService_files/ados.js"></script><script src="./FlashService_files/jquery.min.js"></script>
    <script src="./FlashService_files/stub.en.js"></script>
    <link rel="stylesheet" type="text/css" href="./FlashService_files/all.css">

            <link rel="alternate" type="application/atom+xml" title="Feed for question &#39;Sails.js flash message for user registration&#39;" href="http://stackoverflow.com/feeds/question/25350841">
            <meta name="twitter:app:country" content="US">
            <meta name="twitter:app:name:iphone" content="Stack Exchange iOS">
            <meta name="twitter:app:id:iphone" content="871299723">
            <meta name="twitter:app:url:iphone" content="se-zaphod://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration">
            <meta name="twitter:app:name:ipad" content="Stack Exchange iOS">
            <meta name="twitter:app:id:ipad" content="871299723">
            <meta name="twitter:app:url:ipad" content="se-zaphod://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration">
            <meta name="twitter:app:name:googleplay" content="Stack Exchange Android">
            <meta name="twitter:app:url:googleplay" content="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration">
            <meta name="twitter:app:id:googleplay" content="com.stackexchange.marvin">
        <script>
        
            StackExchange.ready(function () {
                    
                    StackExchange.using("snippets", function () {
                        StackExchange.snippets.initSnippetRenderer();
                    });
                    

                StackExchange.using("postValidation", function () {
                    StackExchange.postValidation.initOnBlurAndSubmit($('#post-form'), 2, 'answer');
                });

                
                StackExchange.question.init({showAnswerHelp:true,totalCommentCount:0,shownCommentCount:0,highlightColor:'#F4A83D',backgroundColor:'#FFF',questionId:25350841});

                styleCode();

                    StackExchange.realtime.subscribeToQuestion('1', '25350841');
                                                                    StackExchange.using("gps", function () { StackExchange.gps.trackOutboundClicks('#content', '.post-text'); });

            });
        </script>


    <script>
        StackExchange.init({"locale":"en","stackAuthUrl":"https://stackauth.com","networkMetaHostname":"meta.stackexchange.com","serverTime":1465799593,"routeName":"Questions/Show","styleCode":true,"enableUserHovercards":true,"snippets":{"enabled":true,"domain":"stacksnippets.net"},"site":{"name":"Stack Overflow","description":"Q&A for professional and enthusiast programmers","isNoticesTabEnabled":true,"recaptchaPublicKey":"6LdchgIAAAAAAJwGpIzRQSOFaO0pU6s44Xt8aTwc","recaptchaAudioLang":"en","enableNewTagCreationWarning":true,"insertSpaceAfterNameTabCompletion":false,"id":1,"enableSocialMediaInSharePopup":true},"user":{"fkey":"71b7033cb47e21a27bdc866ab4cc43c6","rep":0,"isAnonymous":true,"isAnonymousNetworkWide":true}});
        StackExchange.using.setCacheBreakers({"js/prettify-full.en.js":"bdbeb0810d26","js/moderator.en.js":"553e2114f45c","js/full-anon.en.js":"ad2c242f3b8e","js/full.en.js":"1b5a19d74861","js/wmd.en.js":"19cefef926e2","js/third-party/jquery.autocomplete.min.js":"e5f01e97f7c3","js/third-party/jquery.autocomplete.min.en.js":"","js/mobile.en.js":"3199d1e28733","js/help.en.js":"c8004cc0095d","js/tageditor.en.js":"9c6df10dabc4","js/tageditornew.en.js":"5b0866435162","js/inline-tag-editing.en.js":"4fa1a4a3339e","js/revisions.en.js":"47de10a8358f","js/review.en.js":"3c97f36c28e0","js/tagsuggestions.en.js":"d1ff9b84abe5","js/post-validation.en.js":"207c13636b36","js/explore-qlist.en.js":"2a9a628fca7f","js/events.en.js":"0ca91dea4ccb","js/keyboard-shortcuts.en.js":"9a8c3a3301ba","js/external-editor.en.js":"683ce04845f3","js/external-editor.en.js":"683ce04845f3","js/snippet-javascript.en.js":"6d304100c629","js/snippet-javascript-codemirror.en.js":"ce852e44c58b"});
        StackExchange.using("gps", function() {
             StackExchange.gps.init(true);
        });
    </script>
    
        <script>
            StackExchange.ready(function () {
                $('#nav-tour').click(function () {
                    StackExchange.using("gps", function() {
                        StackExchange.gps.track("aboutpage.click", { aboutclick_location: "headermain" }, true);
                    });
                });
            });
        </script>
<script async="" src="./FlashService_files/full-anon.en.js"></script><script async="" src="./FlashService_files/snippet-javascript.en.js"></script><script async="" src="./FlashService_files/post-validation.en.js"></script><script async="" src="./FlashService_files/prettify-full.en.js"></script><script async="" src="./FlashService_files/external-editor.en.js"></script><script type="text/javascript" src="http://static.adzerk.net/Extensions/adFeedback.js"></script><link rel="stylesheet" href="http://static.adzerk.net/Extensions/adFeedback.css"><link type="text/css" rel="stylesheet" href="./FlashService_files/jobs-multi.min.css"></head>
<body class="question-page new-topbar">
    <noscript>&lt;div id="noscript-padding"&gt;&lt;/div&gt;</noscript>
    
        <script>(function () { var old = $.fn.contents; $.fn.contents = function () { try { return old.apply(this, arguments); } catch (e) { return $([]); } } })()</script>
        




    <div id="notify-container"></div>
    <div id="overlay-header"></div>
    <div id="custom-header"></div>





<div class="topbar">
    <div class="topbar-wrapper">

        <div class="js-topbar-dialog-corral">


<div class="topbar-dialog siteSwitcher-dialog dno">
    <div class="header">
        <h3><a href="http://stackoverflow.com/">current community</a></h3>
    </div>
    <div class="modal-content current-site-container">
        <ul class="current-site">
                <li>
                        <div class="related-links">
                    <a href="http://chat.stackoverflow.com/" class="js-gps-track" data-gps-track="site_switcher.click({ item_type:6 })">chat</a>
            </div>




    <a href="http://stackoverflow.com/" class="current-site-link site-link js-gps-track" data-id="1" data-gps-track="
        site_switcher.click({ item_type:3 })">
        <div class="site-icon favicon favicon-stackoverflow" title="Stack Overflow"></div>
        Stack Overflow
    </a>

                </li>
                <li class="related-site">
                        <div class="L-shaped-icon-container">
        <span class="L-shaped-icon"></span>
    </div>

                    



    <a href="http://meta.stackoverflow.com/" class="site-link js-gps-track" data-id="552" data-gps-track="
            site.switch({ target_site:552, item_type:3 }),
        site_switcher.click({ item_type:4 })">
        <div class="site-icon favicon favicon-stackoverflowmeta" title="Meta Stack Overflow"></div>
        Meta Stack Overflow
    </a>

                </li>
                            <li class="related-site">
                        <div class="L-shaped-icon-container">
        <span class="L-shaped-icon"></span>
    </div>

                    <a class="site-link js-gps-track" href="http://careers.stackoverflow.com/?utm_source=stackoverflow.com&amp;utm_medium=site-ui&amp;utm_campaign=multicollider" data-gps-track="site_switcher.click({ item_type:9 })">
                        <div class="site-icon favicon favicon-careers" title="Stack Overflow Careers"></div>
                        Stack Overflow Careers
                    </a>
                </li>
        </ul>
    </div>
    <div class="header" id="your-communities-header">
        <h3>
your communities        </h3>
            
    </div>
    <div class="modal-content" id="your-communities-section">
            
            <div class="call-to-login">
<a href="https://stackoverflow.com/users/signup?ssrc=site_switcher&amp;returnurl=http%3a%2f%2fstackoverflow.com%2fquestions%2f25350841%2fsails-js-flash-message-for-user-registration" class="login-link js-gps-track" data-gps-track="site_switcher.click({ item_type:10 })">Sign up</a> or <a href="https://stackoverflow.com/users/login?ssrc=site_switcher&amp;returnurl=http%3a%2f%2fstackoverflow.com%2fquestions%2f25350841%2fsails-js-flash-message-for-user-registration" class="login-link js-gps-track" data-gps-track="site_switcher.click({ item_type:11 })">log in</a> to customize your list.
            </div>
    </div>
    <div class="header">
        <h3><a href="http://stackexchange.com/sites">more stack exchange communities</a></h3>
        <a href="http://blog.stackoverflow.com/" class="fr">company blog</a>
    </div>
    <div class="modal-content">
            <div class="child-content"></div>
    </div>
</div>
        </div>

        <div class="network-items">

            <a href="http://stackexchange.com/" class="topbar-icon icon-site-switcher yes-hover js-site-switcher-button js-gps-track" data-gps-track="site_switcher.show" title="A list of all 157 Stack Exchange sites">
                <span class="hidden-text">Stack Exchange</span>
            </a>

    <a href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#" class="topbar-icon icon-inbox yes-hover js-inbox-button" title="Recent inbox messages">
        <span class="hidden-text">Inbox</span>
        <span class="unread-count" style="display:none"></span>
    </a>
    <a href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#" class="topbar-icon icon-achievements yes-hover js-achievements-button" data-unread-class="" title="Recent achievements: reputation, badges, and privileges earned">
        <span class="hidden-text">Reputation and Badges</span>
        <span class="unread-count" style="display:none">
            
        </span>
    </a>
        </div>

        <div class="topbar-links">

                <div class="links-container">
                <span class="topbar-menu-links">
                                    <a href="https://stackoverflow.com/users/signup?ssrc=head&amp;returnurl=http%3a%2f%2fstackoverflow.com%2fquestions%2f25350841%2fsails-js-flash-message-for-user-registration" class="login-link">sign up</a>
                                <a href="https://stackoverflow.com/users/login?ssrc=head&amp;returnurl=http%3a%2f%2fstackoverflow.com%2fquestions%2f25350841%2fsails-js-flash-message-for-user-registration" class="login-link">log in</a>

                        <a href="http://stackoverflow.com/tour">tour</a>
                            <a href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#" class="icon-help js-help-button" title="Help Center and other resources">
        help
        <span class="triangle"></span>
    </a>
    <div class="topbar-dialog help-dialog js-help-dialog dno">
        <div class="modal-content">
            <ul>
                                    <li>
                        <a href="http://stackoverflow.com/tour" class="js-gps-track" data-gps-track="help_popup.click({ item_type:1 })">
                            Tour
                            <span class="item-summary">
                                Start here for a quick overview of the site
                            </span>
                        </a>
                    </li>
                <li>
                    <a href="http://stackoverflow.com/help" class="js-gps-track" data-gps-track="help_popup.click({ item_type:4 })">
                        Help Center
                        <span class="item-summary">
                            Detailed answers to any questions you might have
                        </span>
                    </a>
                </li>
                    <li>
                        <a href="http://meta.stackoverflow.com/" class="js-gps-track" data-gps-track="help_popup.click({ item_type:2 })">
                            Meta
                            <span class="item-summary">
                                Discuss the workings and policies of this site
                            </span>
                        </a>
                    </li>
                <li>
                    <a href="http://stackoverflow.com/company/about" class="js-gps-track" data-gps-track="help_popup.click({ item_type:6 })">
                        About Us
                        <span class="item-summary">
                            Learn more about Stack Overflow the company
                        </span>
                    </a>
                </li>
                <li>
                    <a href="http://business.stackoverflow.com/?ref=topbar_help" class="js-gps-track" data-gps-track="help_popup.click({ item_type:7 })">
                        Business
                        <span class="item-summary">
                            Learn more about hiring developers or posting ads with us
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

                    </span>
                </div>

            <div class="search-container">
                <form id="search" action="http://stackoverflow.com/search" method="get" autocomplete="off">
                    <input name="q" type="text" placeholder="Search Q&amp;A" value="" tabindex="1" autocomplete="off" maxlength="240">
                </form>
            </div>

        </div>
    </div>
</div>
    <script>
        StackExchange.ready(function() { StackExchange.topbar.init(); });
    </script>

    <div class="container">
        <div id="header">
            <br class="cbt">
            <div id="hlogo">
                <a href="http://stackoverflow.com/">
                    Stack Overflow
                </a>
            </div>
            <div id="hmenus">
                <div class="nav mainnavs">
                    <ul>
                        <li class="youarehere"><a id="nav-questions" href="http://stackoverflow.com/questions">Questions</a></li>
                            <li><a id="nav-jobs" href="http://stackoverflow.com/jobs?med=site-ui&amp;ref=jobs-tab">Jobs</a></li>
                        <li><a id="nav-tags" href="http://stackoverflow.com/tags">Tags</a></li>
                        <li><a id="nav-users" href="http://stackoverflow.com/users">Users</a></li>
                        <li><a id="nav-badges" href="http://stackoverflow.com/help/badges">Badges</a></li>
                                            </ul>
                </div>
                <div class="nav askquestion">
                    <ul>
                        <li>
                            <a id="nav-askquestion" href="http://stackoverflow.com/questions/ask">Ask Question</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        



        <div id="content" class="snippet-hidden">
            

<div itemscope="" itemtype="http://schema.org/Question">
    <link itemprop="image" href="http://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a">

<div id="herobox">
    <div id="hero-content">
            <div id="close"><a title="click to minimize">_</a></div>
        <div id="blurb">
            Stack Overflow is a community of 4.7 million programmers, just like you, helping each other.
            <br>
                <br>Join them; it only takes a minute:<br>
            <br>
            <a href="http://stackoverflow.com/users/signup?ssrc=hero&amp;returnurl=http%3a%2f%2fstackoverflow.com%2fquestions%2f25350841%2fsails-js-flash-message-for-user-registration" id="tell-me-more" class="button">Sign up</a>
        </div>
        <div id="desc">
            <b>Join the Stack Overflow community to:</b>
            <ol id="hiw">
                <li id="q">Ask programming questions
                </li>
                <li id="an">Answer and help your peers
                </li>
                <li id="b">Get recognized for your expertise
                </li>
            </ol>
        </div>
        <div style="clear: both"></div>
    </div>
    <script>
        StackExchange.ready(function () {

            var location = 0;
            if ($("body").hasClass("questions-page")) {
                location = 1;;
            } else if ($("body").hasClass("question-page")) {
                location = 1;;
            } else if ($("body").hasClass("faq-page")) {
                location = 5;;
            } else if ($("body").hasClass("home-page")) {
                location = 3;;
            }

            $('#tell-me-more').click(function () {
                StackExchange.using("gps", function () {
                    StackExchange.gps.track("hero.action", { hero_action_type: 'cta', location: location }, true);
                });
            });
            $('#herobox #close').click(function () {
                StackExchange.using("gps", function () {
                    StackExchange.gps.track("hero.action", { hero_action_type: "minimize", location: location }, true);
                });
                $.cookie("hero", "mini", { path: "/", expires: 365 });
                $.ajax({
                    url: "/hero-mini",
                    success: function (data) {
                        $("#herobox").fadeOut("fast", function () {
                            $("#herobox").replaceWith(data);
                            $("#herobox-mini").fadeIn("fast");
                        });
                    }
                });
                return false;
            });
        });

    </script>
</div>
			<div id="question-header">
                <h1 itemprop="name"><a href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration" class="question-hyperlink">Sails.js flash message for user registration</a></h1>
		</div>
			<div id="mainbar">

			

<div class="question" data-questionid="25350841" id="question">

    <script>
                var ados = ados || {}; ados.run = ados.run || [];
                ados.run.push(function () { ados_add_placement(22,8277,"adzerk1519127823",4).setZone(43); });
            </script>
            <div class="everyonelovesstackoverflow" id="adzerk1519127823">
            <iframe id="ados_frame_adzerk1519127823_1562693" frameborder="0" scrolling="no" height="90" width="728" src="./FlashService_files/saved_resource.html"></iframe><img height="0px" width="0px" border="0" style="position: absolute; display: none !important;" src="http://engine.adzerk.net/i.gif?e=eyJhdiI6NDM3LCJhdCI6NCwiYnQiOjAsImNtIjo0MTM3MDksImNoIjoxMTc4LCJjayI6e30sImNyIjoxNDU3MDU3LCJkaSI6IjNiYmJmYjQ0YjYyMzQ5MWZiMzk5YmFjZWY0ODZkODI5IiwiZG0iOjEsImZjIjoxNjgyODU1LCJmbCI6MTU2MjY5MywiaXAiOiIxMTUuNzQuMjIuMjM2Iiwia3ciOiJub2RlLmpzLGV4cHJlc3Msc2FpbHMuanMiLCJtayI6Im5vZGUuanMiLCJudyI6MjIsInBjIjowLCJlYyI6MCwicHIiOjgyMTk5LCJydCI6MiwicmYiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyIsInN0Ijo4Mjc3LCJ1ayI6InVlMS0yNWIxMjQ4MmViZjM0MGY2YmI0YTYxZjdhYjg0YTdhNCIsInpuIjo0MywidHMiOjE0NjU3OTk1OTQ0NTYsImJmIjp0cnVlLCJwbiI6ImFkemVyazE1MTkxMjc4MjMiLCJmcSI6MH0&amp;s=JP3VuXoG2RMC_AR1Qcg8AcULQ88"></div>    <table>
        <tbody><tr>
            <td class="votecell">
                

<div class="vote">
        <input type="hidden" name="_id_" value="25350841">
        <a class="vote-up-off" title="This question shows research effort; it is useful and clear">up vote</a>
        <span itemprop="upvoteCount" class="vote-count-post ">4</span>
        <a class="vote-down-off" title="This question does not show any research effort; it is unclear or not useful">down vote</a>

        <a class="star-off" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#">favorite</a>
        <div class="favoritecount"><b>4</b></div>


</div>

            </td>
            
<td class="postcell">
<div>
    <div class="post-text" itemprop="text">

<p>I am following Sail.js tutorial from <a href="http://irlnathan.github.io/sailscasts/blog/2013/08/27/building-a-sails-application-ep4-handling-validation-errors-with-a-flash-message/" rel="nofollow">http://irlnathan.github.io/sailscasts/blog/2013/08/27/building-a-sails-application-ep4-handling-validation-errors-with-a-flash-message/</a></p>

<p>However I ran into a small problem. In the tutorial the author uses registration files inside his user folder and assigns routes in the user controller. He then sends validation errors using <code>flash</code> to the user.</p>

<p>However in my project, the registration files lies in the root folder and I assign the routes from the routes.js file like so</p>

<pre class="lang-js prettyprint prettyprinted"><code><span class="pln">module</span><span class="pun">.</span><span class="pln">exports</span><span class="pun">.</span><span class="pln">routes </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

  </span><span class="str">'/'</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    view</span><span class="pun">:</span><span class="pln"> </span><span class="str">'index'</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">

  </span><span class="str">'/register'</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    view</span><span class="pun">:</span><span class="pln"> </span><span class="str">'register'</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

</span><span class="pun">};</span></code></pre>

<p>Now the problem is to using flash to show users the validation errors while registration. I have used the following in the user controller (create) and it doesn't seem to work</p>

<pre class="lang-js prettyprint prettyprinted"><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">err</span><span class="pun">){</span><span class="pln">
    err</span><span class="pun">.</span><span class="pln">success </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">err</span><span class="pun">);</span><span class="pln">
    req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">flash </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        err</span><span class="pun">:</span><span class="pln"> err   
    </span><span class="pun">}</span><span class="pln">
    req</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">(</span><span class="str">'error'</span><span class="pun">,</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> res</span><span class="pun">.</span><span class="pln">redirect</span><span class="pun">(</span><span class="str">'/register'</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p>Any suggestions?</p>
    </div>
    <div class="post-taglist">
        <a href="http://stackoverflow.com/questions/tagged/node.js" class="post-tag js-gps-track" title="show questions tagged &#39;node.js&#39;" rel="tag">node.js</a> <a href="http://stackoverflow.com/questions/tagged/express" class="post-tag js-gps-track" title="show questions tagged &#39;express&#39;" rel="tag">express</a> <a href="http://stackoverflow.com/questions/tagged/sails.js" class="post-tag js-gps-track" title="show questions tagged &#39;sails.js&#39;" rel="tag">sails.js</a> 
    </div>
    <table class="fw">
    <tbody><tr>
    <td class="vt">
<div class="post-menu"><a href="http://stackoverflow.com/q/25350841" title="short permalink to this question" class="short-link" id="link-post-25350841">share</a><span class="lsep">|</span><a href="http://stackoverflow.com/posts/25350841/edit" class="suggest-edit-post" title="">improve this question</a></div>        
    </td>
    <td class="post-signature owner">
        <div class="user-info ">
    <div class="user-action-time">
        asked <span title="2014-08-17 15:48:07Z" class="relativetime">Aug 17 '14 at 15:48</span>
    </div>
    <div class="user-gravatar32">
        <a href="http://stackoverflow.com/users/1768337/pewpewlasers"><div class="gravatar-wrapper-32"><img src="./FlashService_files/x8yIq.png" alt="" width="32" height="32"></div></a>
    </div>
    <div class="user-details">
        <a href="http://stackoverflow.com/users/1768337/pewpewlasers">pewpewlasers</a>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">919</span><span title="1 gold badge"><span class="badge1"></span><span class="badgecount">1</span></span><span title="10 silver badges"><span class="badge2"></span><span class="badgecount">10</span></span><span title="25 bronze badges"><span class="badge3"></span><span class="badgecount">25</span></span>
        </div>
    </div>
</div>
    </td>
    </tr>
    </tbody></table>
</div>
</td>
        </tr>
                
<tr>
    <td class="votecell"></td>
    <td>
	    <div id="comments-25350841" class="comments  dno">
		    <table>
                <tbody data-remaining-comments-count="0" data-canpost="false" data-cansee="true" data-comments-unavailable="false" data-addlink-disabled="true">

                        <tr><td></td><td></td></tr>
                </tbody>
		    </table>
	    </div>

        <div id="comments-link-25350841" data-rep="50" data-anon="true">

                <a class="js-add-link comments-link disabled-link " title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.">add a comment</a><span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#" onclick=""></a>
        </div>         
    </td>
</tr>        </tbody></table>
</div>

			<div id="answers">

				<a name="tab-top"></a>
				<div id="answers-header">
					<div class="subheader answers-subheader">
						<h2>
								3 Answers
                                <span style="display:none;" itemprop="answerCount">3</span>
						</h2>
						<div>
							<div id="tabs">
        <a href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration?answertab=active#tab-top" data-nav-xhref="" title="Answers with the latest activity first" data-value="active" data-shortcut="A">
            active</a>
        <a href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration?answertab=oldest#tab-top" data-nav-xhref="" title="Answers in the order they were provided" data-value="oldest" data-shortcut="O">
            oldest</a>
        <a class="youarehere" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration?answertab=votes#tab-top" data-nav-xhref="" title="Answers with the highest score first" data-value="votes" data-shortcut="V">
            votes</a>
</div>
						</div>
					</div>    
				</div>    




  
<a name="25352340"></a>
<div id="answer-25352340" class="answer accepted-answer" data-answerid="25352340" itemscope="" itemtype="http://schema.org/Answer" itemprop="acceptedAnswer">
    <table>
        <tbody><tr>
            <td class="votecell">
                

<div class="vote">
        <input type="hidden" name="_id_" value="25352340">
        <a class="vote-up-off" title="This answer is useful">up vote</a>
        <span itemprop="upvoteCount" class="vote-count-post ">12</span>
        <a class="vote-down-off" title="This answer is not useful">down vote</a>



        <span class="vote-accepted-on load-accepted-answer-date" title="loading when this answer was accepted...">accepted</span>

</div>

            </td>
            


<td class="answercell">
    <div class="post-text" itemprop="text">
<p>EDIT: See the Sails documentation <a href="http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html?q=view-target-syntax">here</a> for more information - basically, since you're using static routing, no policies are applied before rendering the view, hence the flash policy isn't working. I'd recommend adding a <code>register</code> action in your <code>UserController</code> and just calling <code>res.view()</code> from there. There's also a <a href="http://stackoverflow.com/questions/21303217/sailsjs-policy-based-route-with-a-view/21340313#21340313">StackOverflow post</a> that discusses this, if you want more information.</p>

<p>I do have an alternative I developed for my own project that you can try out (also requires non-static routing).</p>

<p>In your <code>api/policies</code> folder, create a policy <code>flash.js</code>:</p>

<pre class="lang-js prettyprint prettyprinted"><code><span class="com">// flash.js policy</span><span class="pln">
module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">req</span><span class="pun">,</span><span class="pln"> res</span><span class="pun">,</span><span class="pln"> next</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  res</span><span class="pun">.</span><span class="pln">locals</span><span class="pun">.</span><span class="pln">messages </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> success</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln"> error</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln"> warning</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[]</span><span class="pln"> </span><span class="pun">};</span><span class="pln">

  </span><span class="kwd">if</span><span class="pun">(!</span><span class="pln">req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">messages</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">messages </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> success</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln"> error</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln"> warning</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[]</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> next</span><span class="pun">();</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
  res</span><span class="pun">.</span><span class="pln">locals</span><span class="pun">.</span><span class="pln">messages </span><span class="pun">=</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">clone</span><span class="pun">(</span><span class="pln">req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">messages</span><span class="pun">);</span><span class="pln">

  </span><span class="com">// Clear flash</span><span class="pln">
  req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">messages </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> success</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln"> error</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln"> warning</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[]</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> next</span><span class="pun">();</span><span class="pln">
</span><span class="pun">};</span></code></pre>

<p>This policy allows for three different flash types: success, warning, and error. It'll create an empty dictionary for each session and clear it on page loads.</p>

<p>I created a service <code>FlashService.js</code> in <code>api/services</code> to more easily flash messages:</p>

<pre class="lang-js prettyprint prettyprinted"><code><span class="com">// FlashService.js</span><span class="pln">
module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">req</span><span class="pun">,</span><span class="pln"> message</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">messages</span><span class="pun">[</span><span class="str">'success'</span><span class="pun">].</span><span class="pln">push</span><span class="pun">(</span><span class="pln">message</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  warning</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">req</span><span class="pun">,</span><span class="pln"> message</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> 
    req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">messages</span><span class="pun">[</span><span class="str">'warning'</span><span class="pun">].</span><span class="pln">push</span><span class="pun">(</span><span class="pln">message</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">   
  error</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">req</span><span class="pun">,</span><span class="pln"> message</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">messages</span><span class="pun">[</span><span class="str">'error'</span><span class="pun">].</span><span class="pln">push</span><span class="pun">(</span><span class="pln">message</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p>Then, in your <code>config/policies.js</code> config file, make sure to assign the <code>flash</code> policy to the controller actions that you want to use flash with:</p>

<pre class="lang-js prettyprint prettyprinted"><code><span class="com">// config/policies.js</span><span class="pln">
module</span><span class="pun">.</span><span class="pln">exports</span><span class="pun">.</span><span class="pln">policies </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="str">'*'</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> </span><span class="str">'flash'</span><span class="pun">],</span><span class="pln">
  </span><span class="str">'UserController'</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">'register'</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'flash'</span><span class="pun">],</span><span class="pln">
    </span><span class="com">// any future actions that want flash</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  </span><span class="str">'AnotherController'</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">'someAction'</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'flash'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'somePolicy'</span><span class="pun">],</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p>To flash a message in your <code>register</code> action, just use <code>FlashService.success(req, message)</code>. Alternatively, you can use <code>FlashService.error</code> and <code>FlashService.warning</code>, depending on how your UI styling works and how much you want to differentiate your flash messages.</p>

<p>In your view, you can put something like this:</p>

<pre class="lang-js prettyprint prettyprinted"><code><span class="pun">&lt;%</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">messages </span><span class="pun">&amp;&amp;</span><span class="pln"> messages</span><span class="pun">[</span><span class="str">'error'</span><span class="pun">].</span><span class="pln">length </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"alert alert-danger"</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;%</span><span class="pln"> messages</span><span class="pun">[</span><span class="str">'error'</span><span class="pun">].</span><span class="pln">forEach</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">message</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
    </span><span class="pun">&lt;%=</span><span class="pln"> message </span><span class="pun">%&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">br</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">});</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
  </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">br</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
</span><span class="pun">&lt;%</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">messages </span><span class="pun">&amp;&amp;</span><span class="pln"> messages</span><span class="pun">[</span><span class="str">'warning'</span><span class="pun">].</span><span class="pln">length </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"alert alert-warning"</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;%</span><span class="pln"> messages</span><span class="pun">[</span><span class="str">'warning'</span><span class="pun">].</span><span class="pln">forEach</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">message</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
    </span><span class="pun">&lt;%=</span><span class="pln"> message </span><span class="pun">%&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">br</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">});</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
  </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">br</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
</span><span class="pun">&lt;%</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">messages </span><span class="pun">&amp;&amp;</span><span class="pln"> messages</span><span class="pun">[</span><span class="str">'success'</span><span class="pun">].</span><span class="pln">length </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"alert alert-success"</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;%</span><span class="pln"> messages</span><span class="pun">[</span><span class="str">'success'</span><span class="pun">].</span><span class="pln">forEach</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">message</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
    </span><span class="pun">&lt;%=</span><span class="pln"> message </span><span class="pun">%&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">br</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">});</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln">
  </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">br</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">%&gt;</span><span class="pln"> </span></code></pre>

<p>Of course, you'll have to change the <code>div</code> classes to whatever classes are relevant to your UI.</p>
    </div>
    <table class="fw">
    <tbody><tr>
    <td class="vt">
<div class="post-menu"><a href="http://stackoverflow.com/a/25352340" title="short permalink to this answer" class="short-link" id="link-post-25352340">share</a><span class="lsep">|</span><a href="http://stackoverflow.com/posts/25352340/edit" class="suggest-edit-post" title="">improve this answer</a></div>                    </td>
    <td align="right" class="post-signature">
<div class="user-info ">
    <div class="user-action-time">
        <a href="http://stackoverflow.com/posts/25352340/revisions" title="show all edits to this post">edited <span title="2014-08-17 21:57:23Z" class="relativetime">Aug 17 '14 at 21:57</span></a>
    </div>
    <div class="user-gravatar32">
        
    </div>
    <div class="user-details">
        
        <div class="-flair">
            
        </div>
    </div>
</div>    </td>
            


    <td align="right" class="post-signature">   
       

    <div class="user-info ">
    <div class="user-action-time">
        answered <span title="2014-08-17 18:31:08Z" class="relativetime">Aug 17 '14 at 18:31</span>
    </div>
    <div class="user-gravatar32">
        <a href="http://stackoverflow.com/users/2955137/kk415kk"><div class="gravatar-wrapper-32"><img src="./FlashService_files/7442401f4357b60212e83a56bbbafc24" alt="" width="32" height="32"></div></a>
    </div>
    <div class="user-details">
        <a href="http://stackoverflow.com/users/2955137/kk415kk">kk415kk</a>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">766</span><span title="6 silver badges"><span class="badge2"></span><span class="badgecount">6</span></span><span title="21 bronze badges"><span class="badge3"></span><span class="badgecount">21</span></span>
        </div>
    </div>
</div>
    </td>
    </tr>
    </tbody></table>
</td>
        </tr>
        
<tr>
    <td class="votecell"></td>
    <td>
	    <div id="comments-25352340" class="comments ">
		    <table>
                <tbody data-remaining-comments-count="0" data-canpost="false" data-cansee="true" data-comments-unavailable="false" data-addlink-disabled="true">



    <tr id="comment-39529907" class="comment ">
        <td>
            <table>
                <tbody>
                    <tr>
                        <td class=" comment-score">
                                &nbsp;&nbsp;
                        </td>
                        <td>
                                &nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td class="comment-text">
            <div style="display: block;" class="comment-body">
                <span class="comment-copy">Your solution looks good and very organized. I did as you've suggested, however I don't receive any value for <code>messages</code> in the view. <code>messages</code> is always undefined :/</span>
                    –&nbsp;<a href="http://stackoverflow.com/users/1768337/pewpewlasers" title="919 reputation" class="comment-user owner">pewpewlasers</a>
                <span class="comment-date" dir="ltr"><a class="comment-link" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#comment39529907_25352340"><span title="2014-08-17 21:17:22Z" class="relativetime-clean">Aug 17 '14 at 21:17</span></a></span>
                                                                            </div>
                    </td>
    </tr>
    <tr id="comment-39530447" class="comment ">
        <td>
            <table>
                <tbody>
                    <tr>
                        <td class=" comment-score">
                                &nbsp;&nbsp;
                        </td>
                        <td>
                                &nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td class="comment-text">
            <div style="display: block;" class="comment-body">
                <span class="comment-copy">Ahh, because of the static routing, policies don't apply. What I would do is just map your <code>register</code> view to an action for the <code>UserController</code>. That may also be why the flash policy isn't working in the tutorial you're following. See the Sails documentation <a href="http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html?q=view-target-syntax" rel="nofollow">here</a> for more information. Edited my response above!</span>
                    –&nbsp;<a href="http://stackoverflow.com/users/2955137/kk415kk" title="766 reputation" class="comment-user">kk415kk</a>
                <span class="comment-date" dir="ltr"><a class="comment-link" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#comment39530447_25352340"><span title="2014-08-17 21:55:35Z" class="relativetime-clean">Aug 17 '14 at 21:55</span></a></span>
                    <span class="edited-yes" title="this comment was edited 1 time"></span>
                                                                            </div>
                    </td>
    </tr>
    <tr id="comment-39535538" class="comment ">
        <td>
            <table>
                <tbody>
                    <tr>
                        <td class=" comment-score">
                                &nbsp;&nbsp;
                        </td>
                        <td>
                                &nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td class="comment-text">
            <div style="display: block;" class="comment-body">
                <span class="comment-copy">Thanks for the explanation! :) I added another question related to this if you could have a look at. Thank you. <a href="http://stackoverflow.com/questions/25356827/sails-js-non-static-routing-urls" title="sails js non static routing urls">stackoverflow.com/questions/25356827/…</a></span>
                    –&nbsp;<a href="http://stackoverflow.com/users/1768337/pewpewlasers" title="919 reputation" class="comment-user owner">pewpewlasers</a>
                <span class="comment-date" dir="ltr"><a class="comment-link" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#comment39535538_25352340"><span title="2014-08-18 05:28:16Z" class="relativetime-clean">Aug 18 '14 at 5:28</span></a></span>
                                                                            </div>
                    </td>
    </tr>
    <tr id="comment-42780384" class="comment ">
        <td>
            <table>
                <tbody>
                    <tr>
                        <td class=" comment-score">
                                &nbsp;&nbsp;
                        </td>
                        <td>
                                &nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td class="comment-text">
            <div style="display: block;" class="comment-body">
                <span class="comment-copy">I don't understand why you have to use <code>_.clone()</code> at all. Any tips?</span>
                    –&nbsp;<a href="http://stackoverflow.com/users/705725/dsp-099" title="650 reputation" class="comment-user">dsp_099</a>
                <span class="comment-date" dir="ltr"><a class="comment-link" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#comment42780384_25352340"><span title="2014-11-26 04:52:04Z" class="relativetime-clean">Nov 26 '14 at 4:52</span></a></span>
                    <span class="edited-yes" title="this comment was edited 1 time"></span>
                                                                            </div>
                    </td>
    </tr>
    <tr id="comment-42786009" class="comment ">
        <td>
            <table>
                <tbody>
                    <tr>
                        <td class=" comment-score">
                                &nbsp;&nbsp;
                        </td>
                        <td>
                                &nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td class="comment-text">
            <div style="display: block;" class="comment-body">
                <span class="comment-copy">See <a href="http://stackoverflow.com/questions/16961898/whats-the-difference-between-underscore-clone-and-simple">this explanation on the difference between _.clone() and '='</a>. Essentially, you want to create a copy of the messages so that you can clear them for the user's next action. These flash messages aren't meant to be persistent across every page load.</span>
                    –&nbsp;<a href="http://stackoverflow.com/users/2955137/kk415kk" title="766 reputation" class="comment-user">kk415kk</a>
                <span class="comment-date" dir="ltr"><a class="comment-link" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#comment42786009_25352340"><span title="2014-11-26 09:08:38Z" class="relativetime-clean">Nov 26 '14 at 9:08</span></a></span>
                    <span class="edited-yes" title="this comment was edited 1 time"></span>
                                                                            </div>
                    </td>
    </tr>
                </tbody>
		    </table>
	    </div>

        <div id="comments-link-25352340" data-rep="50" data-anon="true">

                <a class="js-add-link comments-link disabled-link " title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.">add a comment</a><span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#" onclick=""></a>
        </div>         
    </td>
</tr>    </tbody></table>
</div>
<script>
                var ados = ados || {}; ados.run = ados.run || [];
                ados.run.push(function () { ados_add_placement(22,8277,"adzerk1805822908",4).setZone(44); });
            </script>
            <div class="everyonelovesstackoverflow" id="adzerk1805822908"><a href="http://engine.adzerk.net/r?e=eyJhdiI6NDA2LCJhdCI6NCwiYnQiOjAsImNtIjo0MTM5MjgsImNoIjoxMTc4LCJjayI6e30sImNyIjoxNDU4ODcwLCJkaSI6ImE3Njc5NzM0NGY4MTQ0MTY5M2I1ODZhZDhhYzg4MWZhIiwiZG0iOjEsImZjIjoxNjg1MjQyLCJmbCI6MTU2ODk3NiwiaXAiOiIxMTUuNzQuMjIuMjM2Iiwia3ciOiJub2RlLmpzLGV4cHJlc3Msc2FpbHMuanMiLCJtayI6Im5vZGUuanMiLCJudyI6MjIsInBjIjozLjE4LCJlYyI6My4xOCwicHIiOjc2NSwicnQiOjIsInJmIjoiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8iLCJzdCI6ODI3NywidWsiOiJ1ZTEtMjViMTI0ODJlYmYzNDBmNmJiNGE2MWY3YWI4NGE3YTQiLCJ6biI6NDQsInRzIjoxNDY1Nzk5NTk0NDU3LCJiZiI6dHJ1ZSwicG4iOiJhZHplcmsxODA1ODIyOTA4IiwidXIiOiJodHRwczovL2h5cGVyZGV2LmNvbS9hYm91dC8_dXRtX3NvdXJjZT1zdGFja292ZXJmbG93JnV0bV9tZWRpdW09Y3BtJnV0bV9jYW1wYWlnbj1IeXBlckRldiUyMExhdW5jaCZ1dG1fY29udGVudD03Mjh4OTAifQ&amp;s=7UF8CCwNm2L6tnP7T-inMd1ixVg" rel="nofollow" target="_blank" title=""><img src="http://static.adzerk.net/Advertisers/fe8eb0946adc40be93d260caac607109.png" title="" alt="" border="0" width="728" height="90" style="display: none !important;"></a><img height="0px" width="0px" border="0" style="position: absolute; display: none !important;" src="http://engine.adzerk.net/i.gif?e=eyJhdiI6NDA2LCJhdCI6NCwiYnQiOjAsImNtIjo0MTM5MjgsImNoIjoxMTc4LCJjayI6e30sImNyIjoxNDU4ODcwLCJkaSI6ImE3Njc5NzM0NGY4MTQ0MTY5M2I1ODZhZDhhYzg4MWZhIiwiZG0iOjEsImZjIjoxNjg1MjQyLCJmbCI6MTU2ODk3NiwiaXAiOiIxMTUuNzQuMjIuMjM2Iiwia3ciOiJub2RlLmpzLGV4cHJlc3Msc2FpbHMuanMiLCJtayI6Im5vZGUuanMiLCJudyI6MjIsInBjIjozLjE4LCJlYyI6My4xOCwicHIiOjc2NSwicnQiOjIsInJmIjoiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8iLCJzdCI6ODI3NywidWsiOiJ1ZTEtMjViMTI0ODJlYmYzNDBmNmJiNGE2MWY3YWI4NGE3YTQiLCJ6biI6NDQsInRzIjoxNDY1Nzk5NTk0NDU4LCJiZiI6dHJ1ZSwicG4iOiJhZHplcmsxODA1ODIyOTA4IiwiZnEiOjB9&amp;s=868T1u2BYTymuBoJTNkisY97lwo"></div>
  
<a name="28621678"></a>
<div id="answer-28621678" class="answer" data-answerid="28621678" itemscope="" itemtype="http://schema.org/Answer">
    <table>
        <tbody><tr>
            <td class="votecell">
                

<div class="vote">
        <input type="hidden" name="_id_" value="28621678">
        <a class="vote-up-off" title="This answer is useful">up vote</a>
        <span itemprop="upvoteCount" class="vote-count-post ">1</span>
        <a class="vote-down-off" title="This answer is not useful">down vote</a>




</div>

            </td>
            


<td class="answercell">
    <div class="post-text" itemprop="text">
<p>In a normal mvc like rails or cakephp handling flash is something like this: $this-&gt;Flash-&gt;error('An Error Occurred Message'); then displayed it in an element.</p>

<p>In sails it should be simple as that.</p>

<p>In Controller: req.flash('error', 'An Error Occurred Message');</p>

<p>In View Partial: flash.ejs</p>

<pre class="lang-html prettyprint prettyprinted"><code><span class="pun">&lt;%</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> %&gt;

    </span><span class="pun">&lt;%</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">.</span><span class="pln">success</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> %&gt;
    </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">data-alert</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"alert-box success radius"</span><span class="tag">&gt;</span><span class="pln">
        </span><span class="pun">&lt;%=</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">(</span><span class="str">'success'</span><span class="pun">)</span><span class="pln"> %&gt;
        </span><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"#"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"close"</span><span class="tag">&gt;</span><span class="pln">&amp;times;</span><span class="tag">&lt;/a&gt;</span><span class="pln">
    </span><span class="tag">&lt;/div&gt;</span><span class="pln">
    </span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> %&gt;

    </span><span class="pun">&lt;%</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">.</span><span class="pln">warning</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> %&gt;
    </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">data-alert</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"alert-box warning radius"</span><span class="tag">&gt;</span><span class="pln">
        </span><span class="pun">&lt;%=</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">(</span><span class="str">'warning'</span><span class="pun">)</span><span class="pln"> %&gt;
        </span><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"#"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"close"</span><span class="tag">&gt;</span><span class="pln">&amp;times;</span><span class="tag">&lt;/a&gt;</span><span class="pln">
    </span><span class="tag">&lt;/div&gt;</span><span class="pln">
    </span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> %&gt;

    </span><span class="pun">&lt;%</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">.</span><span class="pln">error</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> %&gt;
    </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">data-alert</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"alert-box alert round"</span><span class="tag">&gt;</span><span class="pln">
        </span><span class="pun">&lt;%=</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">(</span><span class="str">'error'</span><span class="pun">)</span><span class="pln"> %&gt;
        </span><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"#"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"close"</span><span class="tag">&gt;</span><span class="pln">&amp;times;</span><span class="tag">&lt;/a&gt;</span><span class="pln">
    </span><span class="tag">&lt;/div&gt;</span><span class="pln">
    </span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> %&gt;

</span><span class="pun">&lt;%</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> %&gt;</span></code></pre>



<p>On Layout:</p>

<pre class="lang-html prettyprint prettyprinted"><code><span class="pun">&lt;%-</span><span class="pln"> </span><span class="kwd">partial</span><span class="pun">(</span><span class="str">'partials/flash'</span><span class="pun">)</span><span class="pln"> %&gt;</span></code></pre>

<p>Handling Error Message per field should be part in a Validation and Html Helper. (Like for example: <a href="https://gist.github.com/mikermcneil/8366092" rel="nofollow">https://gist.github.com/mikermcneil/8366092</a>)</p>
    </div>
    <table class="fw">
    <tbody><tr>
    <td class="vt">
<div class="post-menu"><a href="http://stackoverflow.com/a/28621678" title="short permalink to this answer" class="short-link" id="link-post-28621678">share</a><span class="lsep">|</span><a href="http://stackoverflow.com/posts/28621678/edit" class="suggest-edit-post" title="">improve this answer</a></div>                    </td>
    <td align="right" class="post-signature">
<div class="user-info ">
    <div class="user-action-time">
        <a href="http://stackoverflow.com/posts/28621678/revisions" title="show all edits to this post">edited <span title="2015-02-20 05:01:52Z" class="relativetime">Feb 20 '15 at 5:01</span></a>
    </div>
    <div class="user-gravatar32">
        
    </div>
    <div class="user-details">
        
        <div class="-flair">
            
        </div>
    </div>
</div>    </td>
            


    <td align="right" class="post-signature">   
       

    <div class="user-info ">
    <div class="user-action-time">
        answered <span title="2015-02-20 04:33:19Z" class="relativetime">Feb 20 '15 at 4:33</span>
    </div>
    <div class="user-gravatar32">
        <a href="http://stackoverflow.com/users/288579/john-laniba"><div class="gravatar-wrapper-32"><img src="./FlashService_files/954b696d2a6dd0cffb7688f80b97b6f6" alt="" width="32" height="32"></div></a>
    </div>
    <div class="user-details">
        <a href="http://stackoverflow.com/users/288579/john-laniba">John Laniba</a>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">190</span><span title="10 bronze badges"><span class="badge3"></span><span class="badgecount">10</span></span>
        </div>
    </div>
</div>
    </td>
    </tr>
    </tbody></table>
</td>
        </tr>
        
<tr>
    <td class="votecell"></td>
    <td>
	    <div id="comments-28621678" class="comments  dno">
		    <table>
                <tbody data-remaining-comments-count="0" data-canpost="false" data-cansee="true" data-comments-unavailable="false" data-addlink-disabled="true">

                        <tr><td></td><td></td></tr>
                </tbody>
		    </table>
	    </div>

        <div id="comments-link-28621678" data-rep="50" data-anon="true">

                <a class="js-add-link comments-link disabled-link " title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.">add a comment</a><span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#" onclick=""></a>
        </div>         
    </td>
</tr>    </tbody></table>
</div>

  
<a name="28182034"></a>
<div id="answer-28182034" class="answer" data-answerid="28182034" itemscope="" itemtype="http://schema.org/Answer">
    <table>
        <tbody><tr>
            <td class="votecell">
                

<div class="vote">
        <input type="hidden" name="_id_" value="28182034">
        <a class="vote-up-off" title="This answer is useful">up vote</a>
        <span itemprop="upvoteCount" class="vote-count-post ">0</span>
        <a class="vote-down-off" title="This answer is not useful">down vote</a>




</div>

            </td>
            


<td class="answercell">
    <div class="post-text" itemprop="text">
<p>You can add this export:</p>

<pre class="lang-js prettyprint prettyprinted"><code><span class="pln">module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> flash</span><span class="pun">(</span><span class="pln">req</span><span class="pun">,</span><span class="pln"> res</span><span class="pun">,</span><span class="pln"> next</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></pre>

<p>if (!req.session.flash) {
    req.session.flash = {};
    req.session.flash['success'] = [];
    req.session.flash['warning'] = [];
  }</p>

<p>next();
};</p>

<p>and then in the view:</p>

<pre class="lang-js prettyprint prettyprinted"><code><span class="pun">&lt;%</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">[</span><span class="str">'success'</span><span class="pun">].</span><span class="pln">length </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">%&gt;</span></code></pre>


  



 0) { %&gt;

  



<p>You can create messages in the controller like this:</p>

<pre class="lang-js prettyprint prettyprinted"><code><span class="pln">req</span><span class="pun">.</span><span class="pln">session</span><span class="pun">.</span><span class="pln">flash</span><span class="pun">[</span><span class="str">'success'</span><span class="pun">].</span><span class="pln">push</span><span class="pun">(</span><span class="str">'Updated successfully'</span><span class="pun">);</span></code></pre>
    </div>
    <table class="fw">
    <tbody><tr>
    <td class="vt">
<div class="post-menu"><a href="http://stackoverflow.com/a/28182034" title="short permalink to this answer" class="short-link" id="link-post-28182034">share</a><span class="lsep">|</span><a href="http://stackoverflow.com/posts/28182034/edit" class="suggest-edit-post" title="">improve this answer</a></div>                    </td>
            


    <td align="right" class="post-signature">   
       

    <div class="user-info ">
    <div class="user-action-time">
        answered <span title="2015-01-27 23:34:58Z" class="relativetime">Jan 27 '15 at 23:34</span>
    </div>
    <div class="user-gravatar32">
        <a href="http://stackoverflow.com/users/74340/luiscarlosch"><div class="gravatar-wrapper-32"><img src="./FlashService_files/4a51fa1bb700c7920fb30936cf89920a" alt="" width="32" height="32"></div></a>
    </div>
    <div class="user-details">
        <a href="http://stackoverflow.com/users/74340/luiscarlosch">luiscarlosch</a>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">803</span><span title="12 silver badges"><span class="badge2"></span><span class="badgecount">12</span></span><span title="25 bronze badges"><span class="badge3"></span><span class="badgecount">25</span></span>
        </div>
    </div>
</div>
    </td>
    </tr>
    </tbody></table>
</td>
        </tr>
        
<tr>
    <td class="votecell"></td>
    <td>
	    <div id="comments-28182034" class="comments  dno">
		    <table>
                <tbody data-remaining-comments-count="0" data-canpost="false" data-cansee="true" data-comments-unavailable="false" data-addlink-disabled="true">

                        <tr><td></td><td></td></tr>
                </tbody>
		    </table>
	    </div>

        <div id="comments-link-28182034" data-rep="50" data-anon="true">

                <a class="js-add-link comments-link disabled-link " title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.">add a comment</a><span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#" onclick=""></a>
        </div>         
    </td>
</tr>    </tbody></table>
</div>
									<a name="new-answer"></a>
						<form id="post-form" action="http://stackoverflow.com/questions/25350841/answer/submit" method="post" class="post-form">
						    <input type="hidden" id="post-id" value="25350841">
                            <input type="hidden" id="qualityBanWarningShown" name="qualityBanWarningShown" value="false">
                            <input type="hidden" name="referrer" value="https://www.google.com/">
							<h2 class="space">Your Answer</h2>


            <script>
            StackExchange.ifUsing("editor", function () {
                StackExchange.using("externalEditor", function () {
                    StackExchange.using("snippets", function () {
                        StackExchange.snippets.init();
                    });
                });
            }, "code-snippets");
        </script>
    

<script>
    StackExchange.ready(function() {
        initTagRenderer("".split(" "), "".split(" "));
       
        StackExchange.using("externalEditor", function() {
                // Have to fire editor after snippets, if snippets enabled
                if (StackExchange.options.snippets.enabled) {
                    StackExchange.using("snippets", function() {
                        createEditor();
                    });
                }
                else {
                    createEditor();
                }
            });

            function createEditor() {
                prepareEditor({
                    heartbeatType: 'answer',
                convertImagesToLinks: true,
                reputationToPostImages: 10,
                bindNavPrevention: true,
                postfix: "",
                    onDemand: true,
                    discardSelector: ".discard-answer"
                    ,immediatelyShowMarkdownHelp:true
                    });
                

        }
    });  
</script>


<div id="post-editor" class="post-editor js-post-editor">

    <div style="position: relative;">     
        <div class="wmd-container">
            <div id="wmd-button-bar" class="wmd-button-bar"><ul id="wmd-button-row" class="wmd-button-row"><li id="wmd-bold-button" class="wmd-button" style="left: 0px;"><span style="background-position: 0px -20px;"></span></li><li id="wmd-italic-button" class="wmd-button" style="left: 25px;"><span style="background-position: -20px -20px;"></span></li><li id="wmd-spacer1" class="wmd-spacer" style="left: 50px;"><span style="background-position: -40px -20px;"></span></li><li id="wmd-link-button" class="wmd-button" style="left: 75px;"><span style="background-position: -40px -20px;"></span></li><li id="wmd-quote-button" class="wmd-button" style="left: 100px;"><span style="background-position: -60px -20px;"></span></li><li id="wmd-code-button" class="wmd-button" style="left: 125px;"><span style="background-position: -80px -20px;"></span></li><li id="wmd-image-button" class="wmd-button" style="left: 150px;"><span style="background-position: -100px -20px;"></span></li><li id="wmd-spacer2" class="wmd-spacer" style="left: 175px;"><span style="background-position: -120px -20px;"></span></li><li id="wmd-olist-button" class="wmd-button" style="left: 200px;"><span style="background-position: -120px -20px;"></span></li><li id="wmd-ulist-button" class="wmd-button" style="left: 225px;"><span style="background-position: -140px -20px;"></span></li><li id="wmd-heading-button" class="wmd-button" style="left: 250px;"><span style="background-position: -160px -20px;"></span></li><li id="wmd-hr-button" class="wmd-button" style="left: 275px;"><span style="background-position: -180px -20px;"></span></li><li id="wmd-spacer3" class="wmd-spacer" style="left: 300px;"><span style="background-position: -200px -20px;"></span></li><li id="wmd-undo-button" class="wmd-button" style="left: 325px;"><span style="background-position: -200px -20px;"></span></li><li id="wmd-redo-button" class="wmd-button" style="left: 350px;"><span style="background-position: -220px -20px;"></span></li></ul></div>
            <textarea id="wmd-input" class="wmd-input" name="post-text" cols="92" rows="15" tabindex="101" data-min-length=""></textarea>
        </div>
    </div>

    <div class="fl" style="margin-top: 8px; height:24px;">&nbsp;</div>
    <div id="draft-saved" class="draft-saved community-option fl" style="margin-top: 8px; height:24px; display:none;">draft saved</div>

    <div id="draft-discarded" class="draft-discarded community-option fl" style="margin-top: 8px; height:24px; display:none;">draft discarded</div>



    <div id="wmd-preview" class="wmd-preview"></div>
    <div></div>
    <div class="edit-block">
        <input id="fkey" name="fkey" type="hidden" value="71b7033cb47e21a27bdc866ab4cc43c6">
        <input id="author" name="author" type="text">
    </div>



</div>
							<div style="position: relative;">
								
								            <div class="form-item new-post-login">
        
                <div class="new-login-form">
                    <div class="new-login-left">
                        <h3>Sign up or <a id="login-link" href="http://stackoverflow.com/users/login?ssrc=question_page&amp;returnurl=http%3a%2f%2fstackoverflow.com%2fquestions%2f25350841%2fsails-js-flash-message-for-user-registration%23new-answer">log in</a></h3>
                        <script>
                            StackExchange.ready(function () {
                                StackExchange.helpers.onClickDraftSave('#login-link');
                            });
                        </script>
                        <div class="preferred-login google-login">
                            <p><span class="icon"></span><span>Sign up using Google</span></p>
                        </div>
                        <div class="preferred-login facebook-login">
                            <p><span class="icon"></span><span>Sign up using Facebook</span></p>
                        </div>
                        <div class="preferred-login stackexchange-login">
                            <p><span class="icon"></span><span>Sign up using Email and Password</span></p>
                        </div>
                    </div>
                    <input type="hidden" name="manual-openid" class="manual-openid">
                    <input type="hidden" name="use-facebook" class="use-facebook" value="false">
                    <input type="hidden" name="use-google" class="use-google" value="false">
                    <input type="button" class="submit-openid" value="Submit" style="display:none">
                    <div class="new-login-right">
                                <h3>Post as a guest</h3>
    <div class="form-item">
        <table>
        <tbody><tr>
                    <td class="vm">
                <div>
                    <label for="display-name">Name</label>
                    <input id="display-name" name="display-name" type="text" size="30" maxlength="30" value="" tabindex="105">
                </div>
                <div>
                    <label for="m-address">Email</label>
                    <input id="m-address" name="m-address" type="email" size="30" maxlength="100" value="" tabindex="106" placeholder="required, but never shown">
                </div>
            </td>
        </tr>
        </tbody></table>
    </div>

                    </div>
                </div>
            </div>
            <script>
                StackExchange.ready(
                    function () {
                        StackExchange.openid.initPostLogin('.new-post-login', 'http%3a%2f%2fstackoverflow.com%2fquestions%2f25350841%2fsails-js-flash-message-for-user-registration%23new-answer', 'question_page');
                    }
                );
            </script>
            <noscript>
                        &lt;h3&gt;Post as a guest&lt;/h3&gt;
    &lt;div class="form-item"&gt;
        &lt;table&gt;
        &lt;tr&gt;
                    &lt;td class="vm"&gt;
                &lt;div&gt;
                    &lt;label for="display-name"&gt;Name&lt;/label&gt;
                    &lt;input id="display-name" name="display-name" type="text" size="30" maxlength="30" value="" tabindex="105"&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;label for="m-address"&gt;Email&lt;/label&gt;
                    &lt;input id="m-address" name="m-address" type="email" size="30" maxlength="100" value="" tabindex="106" placeholder="required, but never shown" /&gt;
                &lt;/div&gt;
            &lt;/td&gt;
        &lt;/tr&gt;
        &lt;/table&gt;
    &lt;/div&gt;

            </noscript>

							</div>
           
															<div class="form-submit cbt">
									<input id="submit-button" type="submit" value="Post Your Answer" tabindex="110">
									<a href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration#" class="btn-clear discard-answer dno">discard</a>

<p class="privacy-policy-agreement">
By posting your answer, you agree to the <a href="http://stackexchange.com/legal/privacy-policy" target="_blank">privacy policy</a> and <a href="http://stackexchange.com/legal/terms-of-service" target="_blank">terms of service</a>.</p>
<input type="hidden" name="legalLinksShown" value="1">								</div>
						</form>



						<h2 class="bottom-notice" data-loc="1">
Not the answer you're looking for?							Browse other questions tagged <a href="http://stackoverflow.com/questions/tagged/node.js" class="post-tag" title="show questions tagged &#39;node.js&#39;" rel="tag">node.js</a> <a href="http://stackoverflow.com/questions/tagged/express" class="post-tag" title="show questions tagged &#39;express&#39;" rel="tag">express</a> <a href="http://stackoverflow.com/questions/tagged/sails.js" class="post-tag" title="show questions tagged &#39;sails.js&#39;" rel="tag">sails.js</a>  or <a href="http://stackoverflow.com/questions/ask">ask your own question</a>.						</h2>
			</div>
		</div>
				<div id="sidebar" class="show-votes">
						    <div class="module question-stats">
			        <table id="qinfo">
			            <tbody><tr>
			                <td>
			                    <p class="label-key">asked</p>
			                </td>
			                <td style="padding-left: 10px">
			                    <p class="label-key" title="2014-08-17 15:48:07Z"><b>1 year ago</b></p>
			                </td>
			            </tr>
			            <tr>
			                <td>
			                    <p class="label-key">viewed</p>
			                </td>

			                <td style="padding-left: 10px">
			                    <p class="label-key">
			                        <b>3512 times</b>
			                    </p>
			                </td>
			            </tr>
			                <tr>
			                    <td>
			                        <p class="label-key">active</p>
			                    </td>
			                    <td style="padding-left: 10px">
			                        <p class="label-key"><b><a href="http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration?lastactivity" class="lastactivity-link" title="2015-02-20 05:01:52Z">1 year ago</a></b></p>
			                    </td>
			                </tr>
			        </tbody></table>
			    </div>
						
			<script>
                var ados = ados || {}; ados.run = ados.run || [];
                ados.run.push(function () { ados_add_placement(22,8277,"adzerk66198101",[5,17,2221]).setZone(45); });
            </script>
            <div class="everyonelovesstackoverflow" id="adzerk66198101">
            <iframe id="ados_frame_adzerk66198101_1562694" frameborder="0" scrolling="no" height="250" width="300" src="./FlashService_files/saved_resource(1).html"></iframe><img height="0px" width="0px" border="0" style="position: absolute; display: none !important;" src="http://engine.adzerk.net/i.gif?e=eyJhdiI6NDM3LCJhdCI6NSwiYnQiOjAsImNtIjo0MTM3MDksImNoIjoxMTc4LCJjayI6e30sImNyIjoxNDU3MDU4LCJkaSI6IjljOTI2OWNjODY0ZTQwNzc5NDdkNDM5MjJiZjg2ZWM4IiwiZG0iOjEsImZjIjoxNjgyODU2LCJmbCI6MTU2MjY5NCwiaXAiOiIxMTUuNzQuMjIuMjM2Iiwia3ciOiJub2RlLmpzLGV4cHJlc3Msc2FpbHMuanMiLCJtayI6Im5vZGUuanMiLCJudyI6MjIsInBjIjowLCJlYyI6MCwicHIiOjgyMTk5LCJydCI6MiwicmYiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyIsInN0Ijo4Mjc3LCJ1ayI6InVlMS0yNWIxMjQ4MmViZjM0MGY2YmI0YTYxZjdhYjg0YTdhNCIsInpuIjo0NSwidHMiOjE0NjU3OTk1OTQ0NjAsImJmIjp0cnVlLCJwbiI6ImFkemVyazY2MTk4MTAxIiwiZnEiOjB9&amp;s=RR_VmaKE0EUX99kMVaOS9eKK7s0"></div>
        <div id="hireme" class=" orange remote tagged clc-jobs-multi"><a href="http://stackoverflow.com/jobs?allowsremote=true" target="_blank" data-at="0" data-tz="1" data-ti="14" class="top"><span>Work from anywhere</span></a><div class="middle"><ul class="jobs"><li><a data-at="0" data-tz="3" data-ti="218231" href="http://stackoverflow.com/jobs/118231/senior-full-stack-mean-developer-hardwire-interactive" target="_blank" title="Senior Full Stack MEAN Developer at Hardwire Interactive. Click to learn more."><div class="title">Senior Full Stack MEAN Developer</div><div><span class="company">Hardwire Interactive</span><span class="location">No office location</span></div><div class="opts"><span class="salary">$90,000 - $100,000</span><span class="opt remote">Remote</span></div><span class="post-tag highlight">node.js</span><span class="post-tag">javascript</span></a></li><li><a data-at="0" data-tz="3" data-ti="216247" href="http://stackoverflow.com/jobs/116247/experienced-frontend-engineer-citrusbyte" target="_blank" title="Experienced Frontend Engineer at Citrusbyte. Click to learn more."><div class="title">Experienced Frontend Engineer</div><div><span class="company">Citrusbyte</span><span class="location">No office location</span></div><div class="opts"><span class="opt remote">Remote</span><span class="opt relocate">Relocation</span></div><span class="post-tag">javascript</span><span class="post-tag">reactjs</span></a></li></ul><div style="clear:both"></div></div><img class="impression" src="./FlashService_files/soi.gif" style="display:none;"></div>
			  
    
            <div class="module sidebar-linked">
	<h4 id="h-linked">Linked</h4>
	<div class="linked" data-tracker="lq=1">
<div class="spacer">
	<a href="http://stackoverflow.com/q/16961898?lq=1" title="Vote score (upvotes - downvotes)">
		<div class="answer-votes answered-accepted default">16</div>
	</a>
	<a href="http://stackoverflow.com/questions/16961898/whats-the-difference-between-underscore-clone-and-simple?lq=1" class="question-hyperlink">What's the difference between underscore clone() and simple '='?</a>
</div><div class="spacer">
	<a href="http://stackoverflow.com/q/21303217?lq=1" title="Vote score (upvotes - downvotes)">
		<div class="answer-votes  default">5</div>
	</a>
	<a href="http://stackoverflow.com/questions/21303217/sailsjs-policy-based-route-with-a-view?lq=1" class="question-hyperlink">SailsJS Policy based route with a view</a>
</div><div class="spacer">
	<a href="http://stackoverflow.com/q/25356827?lq=1" title="Vote score (upvotes - downvotes)">
		<div class="answer-votes answered-accepted default">2</div>
	</a>
	<a href="http://stackoverflow.com/questions/25356827/sails-js-non-static-routing-urls?lq=1" class="question-hyperlink">Sails.js non-static routing urls</a>
</div><div class="spacer">
	<a href="http://stackoverflow.com/q/27773050?lq=1" title="Vote score (upvotes - downvotes)">
		<div class="answer-votes answered-accepted default">0</div>
	</a>
	<a href="http://stackoverflow.com/questions/27773050/flash-message-doesnt-show-until-refresh-or-secondary-post?lq=1" class="question-hyperlink">Flash message doesn't show until refresh or secondary post?</a>
</div>			</div>
</div>

				<div class="module sidebar-related">
					<h4 id="h-related">Related</h4>
                    <div class="related js-gps-related-questions" data-tracker="rq=1">
                        <div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/18267706?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes answered-accepted default">28
    </div>
</a><a href="http://stackoverflow.com/questions/18267706/create-config-variables-in-sails-js?rq=1" class="question-hyperlink">Create config variables in sails.js?</a>
</div>
<div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/18313628?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes default">1
    </div>
</a><a href="http://stackoverflow.com/questions/18313628/sails-js-creating-empty-models?rq=1" class="question-hyperlink">Sails.js - creating empty models</a>
</div>
<div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/19101531?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes answered-accepted default">11
    </div>
</a><a href="http://stackoverflow.com/questions/19101531/unique-property-fails-in-sails-js?rq=1" class="question-hyperlink">Unique property fails in Sails.js</a>
</div>
<div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/20674100?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes default">2
    </div>
</a><a href="http://stackoverflow.com/questions/20674100/sails-flash-validation-not-working?rq=1" class="question-hyperlink">sails flash validation not working</a>
</div>
<div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/22244052?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes answered-accepted default">3
    </div>
</a><a href="http://stackoverflow.com/questions/22244052/sails-js-0-10-0-rc4-cannot-flash-message-to-ejs-view?rq=1" class="question-hyperlink">sails.js 0.10.0-rc4 cannot flash message to ejs view</a>
</div>
<div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/25200343?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes answered-accepted default">1
    </div>
</a><a href="http://stackoverflow.com/questions/25200343/sails-js-single-instance-of-an-authenticated-user?rq=1" class="question-hyperlink">Sails.js single instance of an authenticated user</a>
</div>
<div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/25356827?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes answered-accepted default">2
    </div>
</a><a href="http://stackoverflow.com/questions/25356827/sails-js-non-static-routing-urls?rq=1" class="question-hyperlink">Sails.js non-static routing urls</a>
</div>
<div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/27247198?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes default">2
    </div>
</a><a href="http://stackoverflow.com/questions/27247198/sails-js-with-handlebars-templating-engine?rq=1" class="question-hyperlink">Sails.js with handlebars templating engine</a>
</div>
<div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/30063243?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes answered-accepted default">2
    </div>
</a><a href="http://stackoverflow.com/questions/30063243/routing-to-subdomains-using-sails-js?rq=1" class="question-hyperlink">Routing to subdomains using Sails.js</a>
</div>
<div class="spacer js-gps-track">
<a href="http://stackoverflow.com/q/34545856?rq=1" title="Vote score (upvotes - downvotes)">
    <div class="answer-votes default">0
    </div>
</a><a href="http://stackoverflow.com/questions/34545856/sails-js-extend-req-prototype?rq=1" class="question-hyperlink">Sails.js - extend req prototype</a>
</div>

                    </div>
				</div>
            
<div id="hot-network-questions" class="module">
    <h4>
        <a href="http://stackexchange.com/questions?tab=hot" class="js-gps-track" data-gps-track="posts_hot_network.click({ item_type:1, location:11 })">
            Hot Network Questions
        </a>
    </h4>
    <ul>
            <li>
                <div class="favicon favicon-ux" title="User Experience Stack Exchange"></div><a href="http://ux.stackexchange.com/questions/95325/is-ok-nok-better-than-fail-success" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:102 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Is OK/NOK better than "fail/success"
                </a>

            </li>
            <li>
                <div class="favicon favicon-gardening" title="Gardening &amp; Landscaping Stack Exchange"></div><a href="http://gardening.stackexchange.com/questions/26540/what-is-is-this-beautiful-flower" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:269 }); posts_hot_network.click({ item_type:2, location:11 })">
                    What is is this beautiful flower?
                </a>

            </li>
            <li>
                <div class="favicon favicon-ux" title="User Experience Stack Exchange"></div><a href="http://ux.stackexchange.com/questions/95260/view-desktop-site-necessary" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:102 }); posts_hot_network.click({ item_type:2, location:11 })">
                    "View Desktop Site" necessary?
                </a>

            </li>
            <li>
                <div class="favicon favicon-puzzling" title="Puzzling Stack Exchange"></div><a href="http://puzzling.stackexchange.com/questions/35842/are-perfect-cubes-possible" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:559 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Are perfect cubes possible?
                </a>

            </li>
            <li>
                <div class="favicon favicon-codegolf" title="Programming Puzzles &amp; Code Golf Stack Exchange"></div><a href="http://codegolf.stackexchange.com/questions/82751/7-segment-differences" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:200 }); posts_hot_network.click({ item_type:2, location:11 })">
                    7-segment differences
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-music" title="Music: Practice &amp; Theory Stack Exchange"></div><a href="http://music.stackexchange.com/questions/45253/three-notes-on-the-violin" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:240 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Three notes on the violin?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-rpg" title="Role-playing Games Stack Exchange"></div><a href="http://rpg.stackexchange.com/questions/82623/is-goliath-weight-range-reasonable" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:122 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Is Goliath weight range reasonable?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-photo" title="Photography Stack Exchange"></div><a href="http://photo.stackexchange.com/questions/79161/what-can-i-do-to-take-better-more-interesting-photographs-of-tabletop-games" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:61 }); posts_hot_network.click({ item_type:2, location:11 })">
                    What can I do to take better/more interesting photographs of tabletop games?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-emacs" title="Emacs Stack Exchange"></div><a href="http://emacs.stackexchange.com/questions/23912/emacs-is-garbled-by-output-of-a-background-process-running-in-the-same-terminal" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:583 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Emacs is garbled by output of a background process running in the same terminal emulator
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-english" title="English Language &amp; Usage Stack Exchange"></div><a href="http://english.stackexchange.com/questions/331477/what-would-you-call-an-operation-you-can-undo" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:97 }); posts_hot_network.click({ item_type:2, location:11 })">
                    What would you call an operation you can undo?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-codegolf" title="Programming Puzzles &amp; Code Golf Stack Exchange"></div><a href="http://codegolf.stackexchange.com/questions/82609/stack-exchange-vote-counter" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:200 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Stack Exchange Vote Counter
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-math" title="Mathematics Stack Exchange"></div><a href="http://math.stackexchange.com/questions/1822342/minimum-number-of-flips-to-guarantee-heads" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:69 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Minimum number of flips to guarantee heads
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-english" title="English Language &amp; Usage Stack Exchange"></div><a href="http://english.stackexchange.com/questions/331919/an-idiomatic-phrase-meaning-that-you-are-aware-of-a-coming-change-based-on-minor" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:97 }); posts_hot_network.click({ item_type:2, location:11 })">
                    An idiomatic phrase meaning that you are aware of a coming change based on minor signals you've observed over time
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-physics" title="Physics Stack Exchange"></div><a href="http://physics.stackexchange.com/questions/262251/why-was-the-first-discovered-neutrino-an-anti-neutrino" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:151 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Why was the first discovered neutrino an anti-neutrino?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-codereview" title="Code Review Stack Exchange"></div><a href="http://codereview.stackexchange.com/questions/131820/implementing-atoi-in-c" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:196 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Implementing atoi() in C
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-math" title="Mathematics Stack Exchange"></div><a href="http://math.stackexchange.com/questions/1823466/integrating-an-irrational-function" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:69 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Integrating an Irrational Function
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-worldbuilding" title="Worldbuilding Stack Exchange"></div><a href="http://worldbuilding.stackexchange.com/questions/44159/could-humanity-survive-if-all-except-a-few-males-died-in-a-plague" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:579 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Could humanity survive if all except a few males died in a plague?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-english" title="English Language &amp; Usage Stack Exchange"></div><a href="http://english.stackexchange.com/questions/332246/word-or-phrase-for-walking-by-and-ignoring-someone" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:97 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Word or phrase for "Walking by and ignoring someone"?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-workplace" title="The Workplace Stack Exchange"></div><a href="http://workplace.stackexchange.com/questions/69471/consequences-for-leaving-an-easter-egg-in-code" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:423 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Consequences for leaving an easter egg in code?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-travel" title="Travel Stack Exchange"></div><a href="http://travel.stackexchange.com/questions/71245/can-i-ask-for-two-meals-for-my-flight-without-paying-extra" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:273 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Can I ask for two meals for my flight without paying extra?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-cs" title="Computer Science Stack Exchange"></div><a href="http://cs.stackexchange.com/questions/59565/theory-when-is-an-isa-changed" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:419 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Theory: When is an ISA changed?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-3dprinting" title="3D Printing Stack Exchange"></div><a href="http://3dprinting.stackexchange.com/questions/1325/how-to-3d-print-5-pointed-star-object-that-doesnt-have-flat-bottom-and-hole-in" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:640 }); posts_hot_network.click({ item_type:2, location:11 })">
                    How to 3D Print 5-pointed star object that doesn't have flat bottom and hole in the middle?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-programmers" title="Programmers Stack Exchange"></div><a href="http://programmers.stackexchange.com/questions/321463/a-large-part-of-my-code-has-a-major-design-flaw-finish-it-off-or-fix-it-now" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:131 }); posts_hot_network.click({ item_type:2, location:11 })">
                    A large part of my code has a major design flaw. Finish it off or fix it now?
                </a>

            </li>
            <li class="dno js-hidden" style="display: list-item;">
                <div class="favicon favicon-codegolf" title="Programming Puzzles &amp; Code Golf Stack Exchange"></div><a href="http://codegolf.stackexchange.com/questions/82635/write-a-program-that-reverses-the-name-of-its-source-file" class="js-gps-track" data-gps-track="site.switch({ item_type:11, target_site:200 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Write a program that reverses the name of its source file
                </a>

            </li>
    </ul>

        
</div>
		</div>
	
<div id="feed-link">
    <div id="feed-link-text">
        <a href="http://stackoverflow.com/feeds/question/25350841" title="feed of this question and its answers">
            <span class="feed-icon"></span>question feed
        </a>
    </div>
</div>	<script>
StackExchange.ready(function(){$.get('/posts/25350841/ivc/13e0');});
</script>
<noscript>
    &lt;div&gt;&lt;img src="/posts/25350841/ivc/13e0" class="dno" alt="" width="0" height="0"&gt;&lt;/div&gt;
</noscript><div style="display:none" id="prettify-lang">lang-js</div></div>


        </div>
    </div>
    <div id="footer" class="categories">
        <div class="footerwrap">            
            <div id="footer-menu">
                <div class="top-footer-links">
                    <a href="http://stackoverflow.com/company/about">about us</a>
                        <a href="http://stackoverflow.com/tour">tour</a>
                    <a href="http://stackoverflow.com/help">help</a>
                    <a href="http://blog.stackoverflow.com/?blb=1">blog</a>
                        <a href="http://chat.stackoverflow.com/">chat</a>
                    <a href="http://data.stackexchange.com/">data</a>
                    <a href="http://stackexchange.com/legal">legal</a>
                    <a href="http://stackexchange.com/legal/privacy-policy">privacy policy</a>
                    <a href="http://stackoverflow.com/company/work-here">work here</a>
                    <a href="http://stackexchange.com/mediakit">advertising info</a>

                    <a onclick="StackExchange.switchMobile(&quot;on&quot;)">mobile</a>
                    <b><a href="http://stackoverflow.com/contact">contact us</a></b>
                        <b><a href="http://meta.stackoverflow.com/">feedback</a></b>
                    
                </div>
                <div id="footer-sites">
                    <table>
    <tbody><tr>
            <th colspan="3">
                Technology
            </th>
            <th>
                Life / Arts
            </th>
            <th>
                Culture / Recreation
            </th>
            <th>
                Science
            </th>
            <th>
                Other
            </th>
    </tr>
    <tr>
            <td>
                <ol>
                        <li><a href="http://stackoverflow.com/" title="professional and enthusiast programmers">Stack Overflow</a></li>
                        <li><a href="http://serverfault.com/" title="system and network administrators">Server Fault</a></li>
                        <li><a href="http://superuser.com/" title="computer enthusiasts and power users">Super User</a></li>
                        <li><a href="http://webapps.stackexchange.com/" title="power users of web applications">Web Applications</a></li>
                        <li><a href="http://askubuntu.com/" title="Ubuntu users and developers">Ask Ubuntu</a></li>
                        <li><a href="http://webmasters.stackexchange.com/" title="pro webmasters">Webmasters</a></li>
                        <li><a href="http://gamedev.stackexchange.com/" title="professional and independent game developers">Game Development</a></li>
                        <li><a href="http://tex.stackexchange.com/" title="users of TeX, LaTeX, ConTeXt, and related typesetting systems">TeX - LaTeX</a></li>
                            </ol></td><td><ol>
                        <li><a href="http://programmers.stackexchange.com/" title="professional programmers interested in conceptual questions about software development">Programmers</a></li>
                        <li><a href="http://unix.stackexchange.com/" title="users of Linux, FreeBSD and other Un*x-like operating systems">Unix &amp; Linux</a></li>
                        <li><a href="http://apple.stackexchange.com/" title="power users of Apple hardware and software">Ask Different (Apple)</a></li>
                        <li><a href="http://wordpress.stackexchange.com/" title="WordPress developers and administrators">WordPress Development</a></li>
                        <li><a href="http://gis.stackexchange.com/" title="cartographers, geographers and GIS professionals">Geographic Information Systems</a></li>
                        <li><a href="http://electronics.stackexchange.com/" title="electronics and electrical engineering professionals, students, and enthusiasts">Electrical Engineering</a></li>
                        <li><a href="http://android.stackexchange.com/" title="enthusiasts and power users of the Android operating system">Android Enthusiasts</a></li>
                        <li><a href="http://security.stackexchange.com/" title="information security professionals">Information Security</a></li>
                            </ol></td><td><ol>
                        <li><a href="http://dba.stackexchange.com/" title="database professionals who wish to improve their database skills and learn from others in the community">Database Administrators</a></li>
                        <li><a href="http://drupal.stackexchange.com/" title="Drupal developers and administrators">Drupal Answers</a></li>
                        <li><a href="http://sharepoint.stackexchange.com/" title="SharePoint enthusiasts">SharePoint</a></li>
                        <li><a href="http://ux.stackexchange.com/" title="user experience researchers and experts">User Experience</a></li>
                        <li><a href="http://mathematica.stackexchange.com/" title="users of Mathematica">Mathematica</a></li>
                        <li><a href="http://salesforce.stackexchange.com/" title="Salesforce administrators, implementation experts, developers and anybody in-between">Salesforce</a></li>
                        <li><a href="http://expressionengine.stackexchange.com/" title="administrators, end users, developers and designers for ExpressionEngine® CMS">ExpressionEngine® Answers</a></li>
                    
                        <li>
                            <a href="http://stackexchange.com/sites#technology" class="more">
                                more (13)
                            </a>
                        </li>
                </ol>
            </td>
            <td>
                <ol>
                        <li><a href="http://photo.stackexchange.com/" title="professional, enthusiast and amateur photographers">Photography</a></li>
                        <li><a href="http://scifi.stackexchange.com/" title="science fiction and fantasy enthusiasts">Science Fiction &amp; Fantasy</a></li>
                        <li><a href="http://graphicdesign.stackexchange.com/" title="Graphic Design professionals, students, and enthusiasts">Graphic Design</a></li>
                        <li><a href="http://movies.stackexchange.com/" title="movie and tv enthusiasts">Movies &amp; TV</a></li>
                        <li><a href="http://cooking.stackexchange.com/" title="professional and amateur chefs">Seasoned Advice (cooking)</a></li>
                        <li><a href="http://diy.stackexchange.com/" title="contractors and serious DIYers">Home Improvement</a></li>
                        <li><a href="http://money.stackexchange.com/" title="people who want to be financially literate">Personal Finance &amp; Money</a></li>
                        <li><a href="http://academia.stackexchange.com/" title="academics and those enrolled in higher education">Academia</a></li>
                    
                        <li>
                            <a href="http://stackexchange.com/sites#lifearts" class="more">
                                more (9)
                            </a>
                        </li>
                </ol>
            </td>
            <td>
                <ol>
                        <li><a href="http://english.stackexchange.com/" title="linguists, etymologists, and serious English language enthusiasts">English Language &amp; Usage</a></li>
                        <li><a href="http://skeptics.stackexchange.com/" title="scientific skepticism">Skeptics</a></li>
                        <li><a href="http://judaism.stackexchange.com/" title="those who base their lives on Jewish law and tradition and anyone interested in learning more">Mi Yodeya (Judaism)</a></li>
                        <li><a href="http://travel.stackexchange.com/" title="road warriors and seasoned travelers">Travel</a></li>
                        <li><a href="http://christianity.stackexchange.com/" title="committed Christians, experts in Christianity and those interested in learning more">Christianity</a></li>
                        <li><a href="http://gaming.stackexchange.com/" title="passionate videogamers on all platforms">Arqade (gaming)</a></li>
                        <li><a href="http://bicycles.stackexchange.com/" title="people who build and repair bicycles, people who train cycling, or commute on bicycles">Bicycles</a></li>
                        <li><a href="http://rpg.stackexchange.com/" title="gamemasters and players of tabletop, paper-and-pencil role-playing games">Role-playing Games</a></li>
                    
                        <li>
                            <a href="http://stackexchange.com/sites#culturerecreation" class="more">
                                more (21)
                            </a>
                        </li>
                </ol>
            </td>
            <td>
                <ol>
                        <li><a href="http://math.stackexchange.com/" title="people studying math at any level and professionals in related fields">Mathematics</a></li>
                        <li><a href="http://stats.stackexchange.com/" title="people interested in statistics, machine learning, data analysis, data mining, and data visualization">Cross Validated (stats)</a></li>
                        <li><a href="http://cstheory.stackexchange.com/" title="theoretical computer scientists and researchers in related fields">Theoretical Computer Science</a></li>
                        <li><a href="http://physics.stackexchange.com/" title="active researchers, academics and students of physics">Physics</a></li>
                        <li><a href="http://mathoverflow.net/" title="professional mathematicians">MathOverflow</a></li>
                        <li><a href="http://chemistry.stackexchange.com/" title="scientists, academics, teachers and students">Chemistry</a></li>
                        <li><a href="http://biology.stackexchange.com/" title="biology researchers, academics, and students">Biology</a></li>
                    
                        <li>
                            <a href="http://stackexchange.com/sites#science" class="more">
                                more (5)
                            </a>
                        </li>
                </ol>
            </td>
            <td>
                <ol>
                        <li><a href="http://stackapps.com/" title="apps, scripts, and development with the Stack Exchange API">Stack Apps</a></li>
                        <li><a href="http://meta.stackexchange.com/" title="meta-discussion of the Stack Exchange family of Q&amp;A websites">Meta Stack Exchange</a></li>
                        <li><a href="http://area51.stackexchange.com/" title="proposing new sites in the Stack Exchange network">Area 51</a></li>
                        <li><a href="http://careers.stackoverflow.com/">Stack Overflow Careers</a></li>
                    
                </ol>
            </td>
    </tr>
</tbody></table>
                </div>
            </div>
            <div id="copyright">
                site design / logo © 2016 Stack Exchange Inc; user contributions licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/" rel="license">cc by-sa 3.0</a> 
                with <a href="http://blog.stackoverflow.com/2009/06/attribution-required/" rel="license">attribution required</a>
            </div>
            <div id="svnrev">
                rev 2016.6.10.3664
            </div>
                </div>
    </div>
    <noscript>
        &lt;div id="noscript-warning"&gt;Stack Overflow works best with JavaScript enabled&lt;img src="http://pixel.quantserve.com/pixel/p-c1rF4kxgLUzNc.gif" alt="" class="dno"&gt;&lt;/div&gt;
    </noscript>
<script>var p = "http", d = "static"; if (document.location.protocol == "https:") { p += "s"; d = "engine"; } var z = document.createElement("script"); z.type = "text/javascript"; z.async = true; z.src = p + "://" + d + ".adzerk.net/ados.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(z, s);</script>
<script>
    var ados = ados || {};
    ados.run = ados.run || [];
    
    
        
        ados.run.push(function () {
                setTimeout(function () { $("#adzerk-user-match").remove(); }, window.AUMIframeDone ? 0 : 2000);
                ados_setKeywords('node.js,express,sails.js');; ados_load();
        });   
        
</script>

    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-5620270-1');
                        ga('set', 'dimension2', '|node.js|express|sails.js|');         ga('send', 'pageview');
        var _qevents = _qevents || [],
            _comscore = _comscore || [];
        (function () {
            var ssl='https:'==document.location.protocol,
                s=document.getElementsByTagName('script')[0],
                qc=document.createElement('script');
                qc.async = true;
                qc.src = (ssl ? 'https://secure' : 'http://edge') + '.quantserve.com/quant.js';
                s.parentNode.insertBefore(qc, s);
                _qevents.push({ qacct: "p-c1rF4kxgLUzNc" });
                            var sc=document.createElement('script');
                sc.async=true;
                sc.src=(ssl?'https://sb':'http://b') + '.scorecardresearch.com/beacon.js';
                s.parentNode.insertBefore(sc, s);
                _comscore.push({ c1: "2", c2: "17440561" });
        })();
                
    </script>
        
    
    
<script async="" src="./FlashService_files/p.js"></script></body></html>