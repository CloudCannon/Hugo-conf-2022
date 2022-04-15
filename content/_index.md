---
title: Home
content_blocks:
  - _bookshop_name: sections/hero
    logo_image: /uploads/hugo-logo.svg
    post_logo: conf
    date:
      _bookshop_name: simple/event-date
      date: June 24th + 25th 2022 PST
    content: The free, online conference for everything Hugo
    button:
      _bookshop_name: generic/button
      label: Register free today!
      id:
      view_label_icon: true
      border_color: border-blue
      add_modal: true
      open_modal: true
      modal:
        _bookshop_name: simple/modal
        heading: Register today!
        form:
          _bookshop_name: simple/form
          _instancevalue: UUID
          inputs:
            - _bookshop_name: generic/form/email-input
              _name: 315115b0-8bb5-41fd-ad71-2284f367cb43
              label: Email address
              required: true
            - _bookshop_name: generic/form/text-input
              _name: UUID
              label: Full name
              required: true
            - _bookshop_name: generic/form/checkbox-group
              title: 'Are you interested in:'
              checkboxes:
                - _bookshop_name: generic/form/checkbox-input
                  _name: 362a7555-c93b-445a-9597-4bd82c649734
                  label: Speaking
                  checked: false
                  required: false
                - _bookshop_name: generic/form/checkbox-input
                  _name: 5dddb19f-3d36-4f68-ad0a-9500df14302e
                  label: Teaching a workshop
                  checked: false
                  required: false
                - _bookshop_name: generic/form/checkbox-input
                  _name: 52dd993b-0d18-4c83-ba6f-708b795b628b
                  label: Helping organize the conference
                  checked: false
                  required: false
          tandc_checkbox:
            _bookshop_name: generic/form/checkbox-input
            _name: 2acefce1-cfd7-4492-9e62-06cd4d794c02
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
      url: https://www.youtube.com/embed/YE7VzlLtp-4
    button:
      _bookshop_name: generic/button
      label: Submit your talk
      id:
      view_label_icon: true
      border_color: border-white
      add_modal: true
      open_modal: false
      modal:
        _bookshop_name: simple/modal
        heading: Submit your talk
        form:
          _bookshop_name: simple/form
          _instancevalue: UUID
          inputs:
            - _bookshop_name: generic/form/email-input
              _name: f3e05182-329e-452a-ab3f-e0e6595bfb34
              label: Email address
              required: true
            - _bookshop_name: generic/form/text-input
              _name: UUID
              label: Company
              required: false
            - _bookshop_name: generic/form/text-input
              _name: UUID
              label: Full name
              required: true
            - _bookshop_name: generic/form/checkbox-group
              title: 'Type of proposal:'
              checkboxes:
                - _bookshop_name: generic/form/checkbox-input
                  _name: f9396a89-5a4b-4ca6-a3f2-a8b0ad1e3d37
                  label: Lightining talk (5 minutes)
                  checked: false
                  required: false
                - _bookshop_name: generic/form/checkbox-input
                  _name: 8b0b48d8-761a-48b5-94ed-8e2a0a4f0ed9
                  label: 'Tech talk (25 minutes) '
                  checked: false
                  required: false
                - _bookshop_name: generic/form/checkbox-input
                  _name: 6e10a05b-6ff7-4da0-9a54-8c7cb3188a91
                  label: Workshop (45 minutes)
                  checked: false
                  required: false
            - _bookshop_name: generic/form/checkbox-group
              title: 'Who''s your target audience:'
              checkboxes:
                - _bookshop_name: generic/form/checkbox-input
                  _name: 5887984c-00f6-4a85-a8ae-138f6e3d18d2
                  label: Beginner
                  checked: false
                  required: false
                - _bookshop_name: generic/form/checkbox-input
                  _name: 343c117d-7eb1-460a-b01e-683b446e48e3
                  label: Intermediate
                  checked: false
                  required: false
                - _bookshop_name: generic/form/checkbox-input
                  _name: 1b84e663-ae28-4d89-997e-beb382291899
                  label: Advanced
                  checked: false
                  required: false
            - _bookshop_name: generic/form/checkbox-group
              title: Is this your first time speaking?
              checkboxes:
                - _bookshop_name: generic/form/checkbox-input
                  _name: 5eae8342-c5ce-4b1f-a9b2-4919a9eeb0c7
                  label: 'Yes'
                  checked: false
                  required: false
                - _bookshop_name: generic/form/checkbox-input
                  _name: 07e70258-9885-4944-8cfa-8753c332640a
                  label: 'No'
                  checked: false
                  required: false
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
          href="mailto:team@hugoconf.com">team@hugoconf.com</a>.</p>
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
---

