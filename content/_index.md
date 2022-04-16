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
      open_modal: false
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
      view_label_icon: false
      border_color: border-white
      add_modal: true
      open_modal: true
      modal:
        _bookshop_name: simple/modal
        heading: Submit your talk
        modal_content:
          - _bookshop_name: simple/video
            url: https://www.youtube.com/embed/YE7VzlLtp-4
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

