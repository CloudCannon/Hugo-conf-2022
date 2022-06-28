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
      - time_string: 10:00 am – 10:25 am PST
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
          - speaker: 9d765e80-5026-4d4f-af30-3b0327ac1509
      - time_string: 10:30 am – 10:55 am PST
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
          - speaker: 5a52d703-e8fc-46ea-951e-f67716716524
      - time_string: 11:00am – 11.25am PST
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
          - speaker: 5983ed48-6f93-4d27-ae52-dd866af6b9b4
      - time_string:
        type: Tech Talk
        title: Going wild with Hugo modules
        description: "The Nuance TechPubs team produces documentation for multiple products. Because these products are stand-alone, they require their own Hugo projects. But we needed to reuse content between projects and ensure that products in the same line share the same look and feel.\n\nTo implement this, we went wild with Hugo modules! \n\nThis presentation will show how we:\n\n• Created a module that contains the building blocks that apply to all projects;\n•\_Stored project-specific assets, layouts, and content in this module;\n•\_Created modules for components that are shared between products;\n•\_Used the Hugo configuration files to pull in the correct content."
        speakers:
          - speaker:
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

