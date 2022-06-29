---
title: Home
content_blocks:
  - _bookshop_name: sections/hero
    logo_image: /uploads/hugo-logo.svg
    post_logo: conf
    date:
      _bookshop_name: simple/event-date
      date: July 8th + 9th 2022 PST
    content: The free, online conference for everything Hugo
    button:
      _bookshop_name: generic/button
      label: Register free today!
      id:
      view_label_icon: true
      border_color: border-blue
      add_modal: true
      open_modal: false
      modal:
        _bookshop_name: simple/modal
        heading: Register today!
        modal_content:
          - _bookshop_name: simple/mailchimp-form
            _instancevalue: 900c740d-ec7d-4892-bfe2-f0962f3addf5
            form_submission_type: email/cloudcannon
            success_page:
            mailchimp_submission_action:
            inputs:
            tandc_checkbox:
              _bookshop_name: generic/form/checkbox-input
              _name: ee54a2a2-214f-48ce-97c6-12015f67bc15
              label: I agree to the code of conduct
              checked: false
              required: true
            submit_button:
              _bookshop_name: generic/button
              label: Register
              id:
              view_label_icon: true
              border_color: border-pink
              add_modal: false
              open_modal: false
              modal:
  - _bookshop_name: sections/video-section
    video:
      _bookshop_name: simple/video
      url: https://www.youtube.com/embed/BN1BcoY8mD4
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
        heading: Submit your talk
        modal_content:
          - _bookshop_name: generic/markdown-content
            content_html: >-
              <p>All talks will be pre-recorded &mdash; we know fixed conference
              dates aren't for everyone.</p><p>We're particularly interested in
              hearing from under-represented and beginner Hugo users, so don't
              worry if you're not an expert. If you've used Hugo to make
              something that you find interesting, others will
              too!</p><p>&nbsp;</p>
          - _bookshop_name: simple/form
            _instancevalue: 7462c9d1-0e1c-43af-807b-e5981b481d04
            form_submission_type: email/cloudcannon
            success_page: /submitted/
            mailchimp_submission_action:
            inputs:
              - _bookshop_name: generic/form/email-input
                name_and_id: email
                label: Email address
                required: true
              - _bookshop_name: generic/form/text-input
                name_and_id: full_name
                label: Full name
                required: true
              - _bookshop_name: generic/form/text-input
                name_and_id: company
                label: Company
                required: false
              - _bookshop_name: generic/form/radiobutton-group
                title: Type of proposal
                radiobuttons:
                  - _bookshop_name: generic/form/radio-input
                    label: Lightning talk (5 minutes)
                  - _bookshop_name: generic/form/radio-input
                    label: Tech talk (25 minutes)
                  - _bookshop_name: generic/form/radio-input
                    label: Workshop (45 minutes)
              - _bookshop_name: generic/form/text-input
                name_and_id: talk-title
                label: Title for Talk
                required: true
              - _bookshop_name: generic/form/checkbox-group
                title: 'Who''s your target audience:'
                checkboxes:
                  - _bookshop_name: generic/form/checkbox-input
                    _name: ac1d6ff9-c7af-43ae-969c-94087dc88d42
                    label: Beginner
                    checked: false
                    required: false
                  - _bookshop_name: generic/form/checkbox-input
                    _name: 44c7ba60-9dd8-478f-ac10-27df1c4115c4
                    label: Intermediate
                    checked: false
                    required: false
                  - _bookshop_name: generic/form/checkbox-input
                    _name: 103fbe71-aaab-4a37-b813-35a6a26b467e
                    label: Advanced
                    checked: false
                    required: false
              - _bookshop_name: generic/form/radiobutton-group
                title: 'Is this your first time speaking at a tech conference? '
                radiobuttons:
                  - _bookshop_name: generic/form/radio-input
                    label: 'Yes'
                  - _bookshop_name: generic/form/radio-input
                    label: 'No'
            tandc_checkbox:
            submit_button:
              _bookshop_name: generic/button
              label: Submit proposal
              id:
              view_label_icon: true
              border_color: border-pink
              add_modal: false
              open_modal: false
              modal:
    notice_message: <p>Want to speak at HugoConf?</p><p>&nbsp;</p>
  - _bookshop_name: sections/schedule
    title: Friday, July 8th
    talks:
      - time_string: 10:00am — 10:15am PST
        type: Opening
        title: Welcome to HugoConf!
        description:
        speakers:
          - speaker: 4b453d60-77a1-43a6-90d5-bdf73a31e621
      - time_string: 10:15am — 10:40am PST
        type: Tech Talk
        title: Giving your Content Team Full Autonomy with a Hugo CMS
        description: >-
          Hand over the reins of your Hugo site to your content team with
          <a href="https://cloudcannon.com">CloudCannon</a>. In this talk we will learn how to build pages visually,
          use a custom component library, and simplify collaboration on your
          Hugo projects. 
        speakers:
          - speaker: mr.large
      - time_string: "10:45am —\_10:50am PST"
        type: Lightning Talk
        title: Supercharge your Deployment with Cloudflare Pages
        description: >-
          Cloudflare Pages is a super-fast way to deploy your sites directly
          from your Git provider. This talk will cover how to set up your Hugo
          websites with Cloudflare Pages, and we’ll explore all the features you
          get out of the box using Pages for deployment.
        speakers:
          - speaker: 885c6952-2e32-4a7d-96b1-f85db602d38f
      - time_string: "10:55am —\_11:00am PST"
        type: Lightning Talk
        title: Implementing conditional processing in Hugo
        description: >-
          Some of the Nuance TechPubs content is shared between products. In
          particular, many components are available both in hosted and
          on-premises environments. And while most of the content is similar
          between both environments, some content is environment-specific, and
          we needed to find a way to tag that content and include or exclude it
          as needed. To solve this issue, we created our own shortcodes and
          updated the theme to be able to show and hide content as needed. This
          presentation will give a quick demo of how we implemented this
          approach.
        speakers:
          - speaker: 4da37e8e-65fc-4ecb-8f2c-d0b2f0e1dfe7
          - speaker: 3e17b350-fcab-4207-bf98-117b4013a298
          - speaker: 41f68e43-63ca-45df-af44-343b6b1133ea
      - time_string: "11:00am —\_11:25am PST"
        type: Tech Talk
        title: Helping Humans at Scale with Continuous Delivery of Hugo on AWS
        description: >-
          Learn to create Hugo websites that continuously deploy to AWS S3
          Static Hosting and Amazon CloudFront CDN. One of the advantages of
          building on top of the AWS cloud is that it is a globally distributed
          highly available system. In this talk, I walk through how to create
          and then continuously deploy training content-based websites through
          AWS technologies and Github.
        speakers:
          - speaker: 8e33cfb2-0eb5-419e-a9ae-d0a0d5a9594d
      - time_string: "11:30am —\_11:55am PST"
        type: Tech Talk
        title: My journey from LAMP stack to Jamstack with Hugo!
        description: >-
          After doing websites with LAMP stack for 2 decades I decided to give a
          try to JAMStack with Hugo, and I fell in love with Hugo at first
          sight. This talk will show the first steps and results of working with
          Hugo from the perspective of a LAMP stack developer. People will know
          the difference between the platforms, why I chose Hugo, how Hugo
          improved the development process, the quality of the website and how
          it reduced my deployment time without investing too much time on
          learning it.
        speakers:
          - speaker: f596b9bd-767c-4206-91d4-f06e10d1ab52
      - time_string: "12:00pm —\_12:05pm PST"
        type: Lightning Talk
        title: HABIT Stack — an elegant solution for component-driven development
        description: >-
          In this talk I’ll discuss the stack I use to create websites for
          Twitch (and also the HugoConf website) — comprised of Hugo, Alpinejs,
          Bookshop, and Tailwindcss. With this stack I’m able to create sites
          that show the best of component-driven workflows, ideal for both
          efficient development and for non-technical content editors to add
          content, build pages, and keep the sites up to date over time.
        speakers:
          - speaker: 560175c7-7640-4ca0-8315-782aa58caa97
      - time_string: "12:10pm —\_12:15pm PST"
        type: Lightning Talk
        title: Get started with Front Matter CMS to manage your site
        description: >-
          Are you looking for a CMS to manage your site? Front Matter is a
          Visual Studio Code extension that provides CMS functionality, so you
          never have to leave your editor. In this lightning talk, Elio will
          guide you through the installation and configuration process to know
          the proper steps when you start using it.
        speakers:
          - speaker: c8db3822-2372-43d6-8381-93dbc98b5861
      - time_string: "12:20pm —\_12:25pm PST"
        type: Lightning Talk
        title: Word to Web with Hugo in 5 Minutes
        description: >-
        For good or bad, the work world's most predominant application for word processing is Microsoft Word. Given that a great deal of enterprise knowledge is stored in Word, and that same information is useful for many other purposes, it is beneficial to understand how to use Word to quickly create web pages that can be shared across the organization. This talk will show you how using Hugo. The talk’s public repo: <a href="https://github.com/m2web/word-to-web">github.com/m2web/word-to-web</a>
        speakers:
          - speaker: d2c18ec3-dde6-4ad3-a473-7211a35d0757
      - time_string: "12:30pm —\_12:55pm PST"
        type: Tech Talk
        title: 'Introducing Pagefind: static low-bandwidth search at scale'
        description: >-
          In this talk I’ll introduce Pagefind, a new open-source library for
          static websites that provides efficient search at scale without any
          extra infrastructure.

          I’ll demonstrate the process of adding Pagefind to a new site, and
          also show how well it works at scale — for example, Pagefind can
          return a search query against the entirety of MDN with a network
          payload as low as 300KB.
        speakers:
          - speaker: edf5bbc1-6d08-4861-b6f1-bf5b21682a5f
      - time_string: "1:00pm —\_1:25pm PST"
        type: Tech Talk
        title: 'Limitless HTTP requests with Hugo: from basic GET to GraphQL'
        description: >-
          In this talk, we’ll explore resources.GetRemote, the new HTTP request
          solution for Hugo! We’ll cover basic GET requests and see how to
          process their response data or handle their errors. Then we’ll
          experiment with more complex POST and UPDATE requests in the context
          of managing a search index with MeiliSearch REST API. Finally, we’ll
          use the Shopify Storefront API as a case study for performing GraphQL
          requests with Hugo!
        speakers:
          - speaker: 495375a5-7de1-4d51-a917-dd5ae066a95b
      - time_string: "1:30pm —\_1:55pm PST"
        type: Tech Talk
        title: Going wild with Hugo modules
        description: The Nuance TechPubs team produces documentation for multiple products. Because these products are stand-alone, they require their own Hugo projects. But we needed to reuse content between projects and ensure that products in the same line share the same look and feel.\n\nTo implement this, we went wild with Hugo modules! 
        
        
        This presentation will show how we:  
        
        
        • Created a module that contains the building blocks that apply to all projects;  
        
        •Stored project-specific assets, layouts, and content in this module;  
        
        •Created modules for components that are shared between products;  
        
        •Used the Hugo configuration files to pull in the correct content.
        speakers:
          - speaker: 4da37e8e-65fc-4ecb-8f2c-d0b2f0e1dfe7
          - speaker: 3e17b350-fcab-4207-bf98-117b4013a298
          - speaker: 41f68e43-63ca-45df-af44-343b6b1133ea
      - time_string: "2:00pm —\_2:05pm PST"
        type: Lightning Talk
        title: Simplifying Static Images with Figmage
        description: >-
          A picture speaks a thousand words. But it's also tough to write a
          thousand words right on the first try. The colors are off, the sizing
          can be wrong, or maybe the image just doesn't vibe with your content
          as well. And of course, every time you tweak the design, you have to
          export it, re-upload it, and re-deploy. Re-upload, re-deploy. In this
          talk, learn about Figmage, and how it saves you from the image upload
          cycle.
        speakers:
          - speaker: dcd40ef1-331c-4c07-b031-bc506d57669c
      - time_string: "2:10pm —\_2:15pm PST"
        type: Lightning Talk
        title: Using PurgeCSS with Hugo
        description: A quick guide to setting up PurgeCSS with\_PostCSS to automatically optimize the CSS on your site by only including the classes that you use.
        speakers:
          - speaker: 2016b95f-88ad-4c54-9c07-02cc8d9a03f6
      - time_string: "2:20pm —\_2:25pm PST"
        type: Lightning Talk
        title: Meet Quiqr
        description: >-
          Quiqr in nutshell. A tour through all major CMS and publishing
          features. After these five minutes, it will take you only another ten
          minutes to have your own Quiqr maintained Hugo website live.
        speakers:
          - speaker: 2930d573-f186-4091-816d-afec11601a2c
      - time_string: "2:30pm —\_2:55pm PST"
        type: Tech Talk
        title: Demystifying Internationalization with Hugo
        description: >-
          Preparing a website for an international audience comes with lots of
          technical complexities. How do you manage multiple languages flexibly
          and efficiently using Hugo? How do you make the appropriate design
          adjustments for each language in a way that doesn’t result in
          duplicative CSS? In this talk, we’ll answer these questions while
          walking through the technical details behind the new Arabic edition of
          Laws of UX (<a href="https://lawsofux.com/">lawsofux.com/</a>) and exploring Hugo’s Multilingual
          Mode, how to translate content based on i18n configuration, and CSS
          logical properties.
        speakers:
          - speaker: a4084077-a718-46ef-ad23-9509b8698475
      - time_string: "3:00pm —\_3:25pm PST"
        type: Tech Talk
        title: Mistakes I want to avoid for my next Hugo theme
        description: >-
          Initially, I had built the Toha Hugo theme for my own portfolio. Then,
          I shared the theme with the community. When the theme got popular, I
          started to get feature requests that I hadn't planned before. People
          started using the theme for different use-cases that weren't intended
          initially. As a result, I had to keep changing the theme to
          accommodate their needs. However, it is hard to change something that
          is being used by hundreds of people.  In this talk, I will share the
          experience I have gained as I maintain the theme. I will share the
          mistakes I have made, and how can we avoid them.
        speakers:
          - speaker: 8c0aa56a-a8da-4ea7-ad5f-86b6ccc18d8b
      - time_string: "3:30pm —\_3:55pm PST"
        type: Tech Talk
        title: 'Beyond the Static: Adding Interactivity to Your Hugo Sites'
        description: >-
          We all know Hugo as one of the best static site generators available
          today, but whether you're using Hugo to host your personal blog,
          marketing website, or other web application, sometimes you want to add
          a little bit of interactivity. In this talk, we'll explore how you can
          go beyond the static and add interactivity with built-in Hugo
          capabilities as well as explore how you can augment your Hugo site
          with serverless functions to get the best of: performance, speed, and
          productivity.
        speakers:
          - speaker: 61890716-983e-46c8-bbb8-39e0111827c4
      - time_string: "4:00pm —\_4:25pm PST"
        type: Tech Talk
        title: 'Reduce, reuse, reward: How to not repeat yourself in your docs'
        description: >-
          Keeping documentation up to date can be a big task. It's even harder
          when you need to change one detail in many places. This talk will look
          at how to take advantage of features in Hugo to effectively reuse
          content in documentation. That way you can update once and have it
          apply to multiple locations. The talk will also touch on some of the
          potential pitfalls to look out for and how to organize for success.
        speakers:
          - speaker: c8135d38-a962-4b26-9425-8a457a267893
      - time_string: "4:30pm —\_4:55pm PST"
        type: Tech Talk
        title: Custom Shortcodes for the Win
        description: >-
          Shortcodes provide a nice clean way of making reusable functionality
          within your content pages. We will focus on explaining their syntax
          and some of their constraints while demonstrating how to create
          dynamic image placeholders using some of Hugo's existing image
          manipulation tools. These placeholders improve the User Experience of
          a site in several important ways that we will go into more depth
          about.
        speakers:
          - speaker: 125e09bb-cb53-4b3d-89f1-6c2e386fb386
      - time_string: "5:00pm —\_5:05pm PST"
        type: Lightning Talk
        title: How to build a Developer profile
        description: As a Developer, there are the things that we want to share with others. It might be a code snippet, tech concept, use cases, solutions, or to showcase your projects and experiences. As a terminal lover I was always concerned whether I can write my blog in Vim, or whether I could release my blog in the same way I release my features. In this talk, I am going to share some tips on how to set up the platform in a developer environment only. Also, I will discuss some tools which helped me to build my profile at <a href="https://ashish.one">ashish.one</a>.
        speakers:
          - speaker: e8804521-2be8-4d8b-b544-45d4ac695a0b
  - _bookshop_name: sections/schedule
    title: Saturday, July 9th
    talks:
      - time_string: "10:00am —\_10:45am PST"
        type: Workshop
        title: How to Achieve Perfect Google Lighthouse Scores Using Hugo
        description: >-
          I will provide a step by step breakdown on how to find the easter egg
          in Google Lighthouse when you achieve perfect scores by using Hugo.
        speakers:
          - speaker: 0f5d9642-5901-4193-8a51-0ee3b25859d7
      - time_string: "11:00am —\_11:45am PST"
        type: Workshop
        title: >-
          Editing Hugo live in the browser: how to bring page-building workflows
          to your Hugo sites with Bookshop
        description: >-
          This workshop will demonstrate how to add Bookshop, a component
          development workflow for static websites, to a Hugo site.

          Bookshop helps you develop and reuse components across your site,
          browse a local component library, and create a rich live-editing
          experience in the browser. Most importantly, Bookshop works with Hugo
          templates, improving your DX while shipping a #leanweb to your users.
        speakers:
          - speaker: edf5bbc1-6d08-4861-b6f1-bf5b21682a5f
      - time_string: "12:00pm —\_12:45pm PST"
        type: Workshop
        title: Using GitHub Pages with Actions to deploy Hugo sites in seconds
        description: >-
          If you've used GitHub and Hugo, you've probably heard of or maybe even
          use GitHub Pages. Until recently, the only way to deploy a site to
          Pages using something other than Jekyll was to run the build
          externally and commit the output back to a special branch of your
          repository. In this workshop, I'll cover a new workflow that treats
          all static site generators the same, and unlocks the potential of
          using GitHub Actions to build and deploy a Hugo site in seconds,
          without ever leaving your browser.
        speakers:
          - speaker: 5c8cc9dd-c966-4a15-ba4f-514bfa0453ba
      - time_string: "1:00pm —\_1:45pm PST"
        type: Workshop
        title: Quiqr workshop for Hugo site developers
        description: >-
          This workshop shows how to quickly develop websites for non-technical
          customers. We're going to add a Quiqr CMS layer on top of an existing
          Hugo Theme. I'll show some CMS developing patterns and best practices.
          As a bonus we will move the theme styling from code to a non-technical
          user interface. Finally I'll show how to share a Quiqr made website to
          the end user.
        speakers:
          - speaker: 2930d573-f186-4091-816d-afec11601a2c
      - time_string: "2:00pm —\_2:45pm PST"
        type: Workshop
        title: Build an Open Source Blogging Platform With Appwrite and Hugo
        description: >-
          We will see how we can build a blogging platform in a few minutes with
          Hugo and Appwrite. We will use Appwrite to store the content and use
          Hugo to build with the content that is stored in Appwrite.
        speakers:
          - speaker: d12c1b9b-bc45-4998-9f62-aba6e3f1654a
  - _bookshop_name: sections/speakers
  - _bookshop_name: sections/hexagon-group
    hexagons:
      - _bookshop_name: simple/hexagon-block
        hexagon_color: pink
        title: A Conference for all Hugoers
        content: >-
          <p>HugoConf organizers are dedicated to providing a safe, inclusive
          and harassment free environment for all attendees. Please review our
          <a href="/code-of-conduct">code of conduct</a>, and help build the
          community by being supportive and constructive.</p><p>&nbsp;</p><p>If
          you have any questions or suggestions, reach out to <a
          href="mailto:team@hugoconf.io">team@hugoconf.io</a>.</p>
      - _bookshop_name: simple/hexagon-block
        hexagon_color: green
        title: Help us Organize
        content: >-
          <p>We're looking for members of the community to help plan and run the
          conference on the day.</p><p>&nbsp;</p><p>If you're interested in
          participating in any capacity, <a href="mailto:team@hugoconf.io">get
          in touch</a>!</p><p>&nbsp;</p><p>We'd love your help.</p>
      - _bookshop_name: simple/hexagon-block
        hexagon_color: yellow
        title: FAQs
        content: >-
          <p><strong>Where is HugoConf held?</strong></p><p>Right here, on this
          website! On July 8th, we'll stream the sessions directly on this
          page.</p><p>&nbsp;</p><p><strong>I can't attend! 😭 Will the talks and
          workshop videos be available to watch later?</strong></p><p>Yes, all
          sessions will be recorded and publicly available on YouTube.</p>
  - _bookshop_name: sections/side_animation
    colours:
      - '#C9177E'
      - '#00A88A'
      - '#034AD8'
      - '#FCD804'
---

