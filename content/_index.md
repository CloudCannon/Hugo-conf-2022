---
title: Home
content_blocks:
  - _bookshop_name: sections/hero
    logo_image: /uploads/hugo-logo.svg
    post_logo: conf
    date:
      _bookshop_name: simple/event-date
      date: 21st September 2023
    content: The free, online conference for everything Hugo
    button:
      _bookshop_name: generic/button
      label: Register for HugoConf 2023
      id:
      view_label_icon: true
      border_color: border-blue
      add_modal: true
      open_modal: false
      modal:
        _bookshop_name: simple/modal
        heading: Sign up for HugoConf updates
        modal_content:
          - _bookshop_name: simple/hubspot-form
            region: na1
            portalId: 22461532
            formId: e199cbb1-2dcc-441f-8516-224f3ee65e8d
  - _bookshop_name: sections/schedule
    title: Talks and workshops
    talks:
      - time_string:
        video_link:
        type: Live Interview
        title: Live Interview with Hugo contributor Joe Mooring
        description: >-
          Learn how to contribute effectively (without code) to the Hugo
          project, with Joe Mooring.
        speakers:
          - speaker: 85e0c227-254a-4e07-bfa2-f42a23a51244
      - time_string: ''
        video_link:
        type: Tech Talk
        title: >-
          Dismantling the Monolith: Migrating from WordPress to Hugo (with your
          components and layouts!)
        description: "One of the biggest hurdles to using a static site generator like Hugo is the initial transition from a monolithic legacy CMS (WordPress, Drupal, etc). Of course, the advantages are huge: you can select the best hosting, CI/CD, and CMS options for yourself, and maintain full control of your site content, without the same maintenance overheads.  \n\n<br/><br/>Beginning with a WordPress site, I’ll demonstrate CloudCannon’s open-source component migrator, which reads any site’s flat files and builds a “data + markup + layouts” model. This model can be plugged into Hugo (or any SSG) —\_and with minimal configuration, can then be set up for page-building and live visual editing for non-technical users.  "
        speakers:
          - speaker: 1ecc2e19-92f5-4b44-8ba2-281dc47d48ea
      - time_string: ''
        video_link:
        type: Lightning Talk
        title: Manage your Hugo website with external content and assets
        description: >-
          We will explore a strategy of separating the contents of your website
          from the source code like theme, partials, etc. It is a strategy that
          Elio has taken to allow contributors to edit the content without
          fiddling with the source code and accidentally breaking it.<br/>
          <br/>You will learn how you can separate the content, and how you can
          keep it all in sync.
        speakers:
          - speaker: 1031f5dd-67ed-432e-8a13-44c189534425
      - time_string: ''
        video_link:
        type: Tech Talk
        title: Improving Access to 4M U.S. Laws with Hugo
        description: >-
          U.S. laws are scattered across more than 130 government websites with
          varying quality (scanned dot matrix printouts!), searchability, and
          accessibility. The data is also published by legal research companies,
          but much of the data is only available behind paywalls for law firms.
          Meanwhile, people, including attorneys, are asking legal questions to
          LLMs trained on pre-pandemic law. <br/><br/>At this talk, OpenLaws
          discusses how we use Hugo to publish 4 million pieces of legal data in
          our efforts to make our laws more accessible to everyone. We’ll share
          our approach to generating and hosting millions of pages and our CI/CD
          pipeline.
        speakers:
          - speaker: 4866361d-faa0-4928-b4bb-9f92ed2f7a31
      - time_string: ''
        video_link:
        type: Lightning Talk
        title: Hugobricks — stackable content blocks for Hugo
        description: >-
          Create a website with stackable content blocks. My current WIP can be
          found at <u><a
          href="https://www.hugobricks.preview.usecue.com/">hugobricks.preview.usecue.com</a></u>.
          It is currently based on the awesome Hugo starter template from <u><a
          href="https://zeon.studio">zeon.studio</a></u>, but will soon be more
          similar to <u><a
          href="https://wpstackable.com.">wpstackable.com</a></u>.
          <br/><br/>WordPress here we come! ;-)
        speakers:
          - speaker: d25749e8-ef87-497b-8d55-40ee2faa0eca
      - time_string: ''
        video_link:
        type: Tech Talk
        title: Building your portfolio with Hugo
        description: "In a world where a digital portfolio is your gateway to opportunities, creating an engaging online presence has never been more crucial. In this talk, we will cover how to build an impressive portfolio website using the Hugo framework.<br/><br/>This session is all about action. We'll cover:<br/><br/>\n•\_An introduction to static site generators and their advantages.<br/>\n•\_Step-by-step guidance on setting up Hugo, selecting a suitable theme, and integrating personalized content.<br/>\n•\_Tips for optimizing website performance, responsiveness, and SEO within the Hugo framework.<br/>\n•\_Real-world examples of successful portfolio websites built using Hugo."
        speakers:
          - speaker: d12c1b9b-bc45-4998-9f62-aba6e3f1654a
      - time_string: ''
        video_link:
        type: Lightning Talk
        title: From blog to small business with Hugo
        description: >-
          After writing and maintaining a technical blog for 10+ years on data
          topics, Wordpress pains and expenses had me wanting to throw it all
          away. <br/><br/>I’ll share how I saved my blog with Hugo, picked up
          skills that were immediately useful in my career, and now am using
          Hugo to efficiently launch my new small business.
        speakers:
          - speaker: 6c7f23d9-7d3a-4f8b-8821-c008ec09e90a
      - time_string: ''
        video_link:
        type: Tech Talk
        title: How to Turn a Hugo Website into a PWA for better user engagement
        description: >-
          I'll start with an overview of PWAs, highlighting their benefits like
          enhanced performance, offline access, and immersive experiences. Then
          I'll introduce Hugo, a dynamic static site generator, and I'll explore
          how its speed and simplicity make it an excellent candidate for PWA
          conversion. I'll then break down PWA essentials, explaining service
          workers that enable background processes, caching, and offline
          functionality. I'll choose a Hugo theme and will publish it to
          Netlify. Then I'll start converting a Hugo site into a PWA, guiding
          attendees through service worker implementation for intelligent
          caching and offline capabilities. Crafting a Web App Manifest comes
          next, ensuring metadata and icons create a captivating user
          experience.
        speakers:
          - speaker: 3c6e6756-fcb8-432f-82dd-96404a1dcc6a
      - time_string: ''
        video_link:
        type: Lightning Talk
        title: Introducing HUGE, a Hugo framework
        description: >-
          Even though Hugo handles a lot from configuration, most of its later
          features (pipes, js.build, image transformation) do not. HUGE aligns
          their ease of use with other features of Hugo. Namely: configuration
          files!<br/><br/>

          This means users don't have to educate themselves about the Pipes or
          Media transformation APIs and can focus on what matters: HTML,
          Javascript, CSS. <br/><br/>We’ll review how easy it is to setup HUGE,
          how to configure your project’s asset pipeline with it, and how it can
          help you handle other things like local environment variables, or self
          hosted fonts!
        speakers:
          - speaker: 495375a5-7de1-4d51-a917-dd5ae066a95b
  - _bookshop_name: generic/markdown-content
    content_html: "<h2 class=\"center-align\">More talks and workshops<br />will be announced soon!</h2><p>\_</p><p>\_</p>"
  - _bookshop_name: sections/video-section
    notice_message: ''
    button:
      _bookshop_name: generic/button
      label: Submit your talk
      id:
      view_label_icon: false
      border_color: border-white
      add_modal: true
      open_modal: false
      modal:
        _bookshop_name: simple/modal
        heading: Register to speak at HugoConf
        modal_content:
          - _bookshop_name: simple/hubspot-form
            region: na1
            portalId: 22461532
            formId: c1a95734-9550-4306-9e12-892c5112b894
    video:
      _bookshop_name: simple/video
      url: https://youtube.com/embed/auctAccLbns
  - _bookshop_name: generic/markdown-content
    content_html: >-
      <h2 class="center-align"><br />HugoConf is better thanks to our
      sponsors!</h2>
  - _bookshop_name: sections/hexagon-group
    hexagons:
      - _bookshop_name: simple/hexagon-block
        hexagon_color: green
        title: PaperCut
        image: /uploads/papercut-print-management-software-5-1.png
        image_alt:
        content: >-
          <p>FACT: Rainbows are better with unicorns. And Hugo conferences are
          better with you! We can’t wait to see you at the event. In the
          meantime,&nbsp;<a target="_blank" rel="noopener"
          href="https://pcut.io/3s22NiJ">this fancy webpage</a>&nbsp;will give
          you a little more idea of who we are, what we do, and why Printers are
          better with PaperCut.</p>
      - _bookshop_name: simple/hexagon-block
        hexagon_color: green
        title: OpenGraph Images
        image: /uploads/ogi.png
        image_alt:
        content: "<p>With <a target=\"_blank\" rel=\"noopener\" href=\"https://opengraphimage.com/?ref=hugoconf\"><strong>OpenGraph Images</strong></a> you can build dynamic images from your existing web stack. OpenGraph images are generated on the fly using parameters from the url and your external data just like a web page.&nbsp;</p><p>\_</p>"
  - _bookshop_name: generic/markdown-content
    content_html: <h2 class="center-align"><br />Any questions?</h2>
  - _bookshop_name: sections/hexagon-group
    hexagons:
      - _bookshop_name: simple/hexagon-block
        hexagon_color: yellow
        title: FAQs
        image:
        image_alt:
        content: "<p><strong>Where is HugoConf held?</strong></p><p>Right here, on this website! On September 21st (PDT), we'll stream the sessions directly on this page.</p><p>\_</p><p><strong>I can't attend! 😭 Will the talks and workshop videos be available to watch later?</strong></p><p>Yes, all sessions will be recorded and publicly available on YouTube.</p>"
      - _bookshop_name: simple/hexagon-block
        hexagon_color: pink
        title: A Conference for all Hugoers
        image:
        image_alt:
        content: "<p>HugoConf organizers are dedicated to providing a safe, inclusive and harassment free environment for all attendees. Please review our <a href=\"/code-of-conduct\">code of conduct</a>, and help build the community by being supportive and constructive.<br />\_</p><p>If you have any questions or suggestions, reach out to <a href=\"mailto:hello@hugoconf.io\">hello@hugoconf.io</a>.</p>"
  - _bookshop_name: sections/side_animation
    colours:
      - '#C9177E'
      - '#00A88A'
      - '#034AD8'
      - '#FCD804'
---
