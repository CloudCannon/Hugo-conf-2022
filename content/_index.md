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
          - _bookshop_name: simple/form
            _instancevalue: UUID
            inputs:
              - _bookshop_name: generic/form/email-input
                _name: a1bb2a0c-6368-469e-91c8-391ae5a6958f
                label: Email address
                required: true
              - _bookshop_name: generic/form/text-input
                _name: UUID
                label: Full name
                required: true
            tandc_checkbox:
              _bookshop_name: generic/form/checkbox-input
              _name: 0745bad3-7c43-4d5c-9b6c-21c78d7b6634
              label: I agree to the code of conduct
              checked: false
              required: false
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
            _instancevalue: UUID
            inputs:
              - _bookshop_name: generic/form/email-input
                _name: 20faea14-8ca6-4447-b5f7-bf77c77e5836
                label: Email address
                required: true
              - _bookshop_name: generic/form/text-input
                _name: UUID
                label: Full name
                required: true
              - _bookshop_name: generic/form/text-input
                _name: UUID
                label: Company
                required: false
              - _bookshop_name: generic/form/radiobutton-group
                title: 'Type of proposal:'
                radiobuttons:
                  - _bookshop_name: generic/form/radio-input
                    label: Lightning talk (5 minutes)
                  - _bookshop_name: generic/form/radio-input
                    label: 'Tech talk (25 minutes) '
                  - _bookshop_name: generic/form/radio-input
                    label: Workshop (45 minutes)
              - _bookshop_name: generic/form/checkbox-group
                title: 'Who''s your target audience:'
                checkboxes:
                  - _bookshop_name: generic/form/checkbox-input
                    _name: 3285f726-46b1-4f94-b4fd-6520bc8f5c55
                    label: Beginner
                    checked: false
                    required: false
                  - _bookshop_name: generic/form/checkbox-input
                    _name: 17d37e79-235f-4c65-b235-10b488e08c56
                    label: Intermediate
                    checked: false
                    required: false
                  - _bookshop_name: generic/form/checkbox-input
                    _name: bc74a09e-d76a-4a59-a01c-0663acb9c479
                    label: Advanced
                    checked: false
                    required: false
              - _bookshop_name: generic/form/radiobutton-group
                title: Is this your first time speaking?
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
        title: A conference for all Hugoers
        content: >-
          <p>HugoConf organizers are dedicated to providing a safe, inclusive
          and harassment free environment for all attendees. Please review our
          <a href="#">code of conduct</a> help build the community by being
          supportive and constructive.</p><p>&nbsp;</p><p>If you have any
          questions or suggestions, reach out to <a
          href="mailto:team@hugoconf.io">team@hugoconf.io</a>.</p>
      - _bookshop_name: simple/hexagon-block
        hexagon_color: green
        title: Help us organize
        content: >-
          <p>We're looking for members of the community to help plan and run the
          conference on the day. If you're interested in participating in any
          capacity, get in touch! We'd love your help.</p>
      - _bookshop_name: simple/hexagon-block
        hexagon_color: yellow
        title: FAQs
        content: >-
          <p><strong>Where is HugoConf held?</strong><br />Right here on this
          website! On the day, we'll stream the sessions directly on this
          page.</p><p>&nbsp;</p><p><strong>I can't attend, will the videos be
          available later?</strong><br />Yes, all sessions will be recorded and
          publicly available on YouTube.</p>
  - _bookshop_name: sections/side_animation
    colours:
      - '#C9177E'
      - '#00A88A'
      - '#034AD8'
      - '#FCD804'
---

