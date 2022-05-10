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
                    label: Lighting talk (5 minutes)
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
    notice_message: <p>Want to speak? Submit your proposal by <strong>June 1st. </strong></p>
  - _bookshop_name: sections/hexagon-group
    hexagons:
      - _bookshop_name: simple/hexagon-block
        hexagon_color: pink
        title: A Conference for all Hugoers
        content: >-
          <p>HugoConf organizers are dedicated to providing a safe, inclusive
          and harassment free environment for all attendees. Please review our
          <a href="/code-of-conduct">code of conduct</a> help build the
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

