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
            _instancevalue: 7a325f25-e386-49da-aff0-ecf6f3ac2e51
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
              - _bookshop_name: generic/form/conditional-input
                _name: 6394c11b-67fb-406d-a400-b746e91b05be
                label: I would like to go into the draw to get free HugoConf swag
                checked: false
                inputs:
                  - _bookshop_name: generic/form/text-input
                    name_and_id: MERGE3[addr1]
                    label: Street
                    required: false
                  - _bookshop_name: generic/form/text-input
                    name_and_id: MERGE3[addr2]
                    label: PO Box
                    required: false
                  - _bookshop_name: generic/form/text-input
                    name_and_id: MERGE3[city]
                    label: City
                    required: false
                  - _bookshop_name: generic/form/text-input
                    name_and_id: MERGE3[state]
                    label: State
                    required: false
                  - _bookshop_name: generic/form/text-input
                    name_and_id: MERGE3[zip]
                    label: Postcode
                    required: false
                  - _bookshop_name: generic/form/country-select-input
                    name_and_id: MERGE3[country]
                    label: Country
                    required: false
            tandc_checkbox:
              _bookshop_name: generic/form/checkbox-input
              _name: b4345bea-87d4-4249-8429-788a875350bf
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
            _instancevalue: 13a07aae-c5e3-4c62-b759-f3c43b76669e
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
          <p><strong>Where is HugoConf held?</strong></p><p>&mdash; &nbsp;Right
          here, on this website! On July 8th, we'll stream the sessions directly
          on this page.</p><p>&nbsp;</p><p><strong>I can't attend! 😭 Will the
          talks and workshop videos be available to watch
          later?</strong></p><p>&mdash; Yes, all sessions will be recorded and
          publicly available on YouTube.</p>
  - _bookshop_name: sections/side_animation
    colours:
      - '#C9177E'
      - '#00A88A'
      - '#034AD8'
      - '#FCD804'
---

