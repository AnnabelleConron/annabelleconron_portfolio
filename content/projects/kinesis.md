---
title: "Kinesis"
description: "Kinesis is a desk-based physical artefact that structures sedentary work into timed cycles with integrated stretch breaks. The device addresses a common disconnect: knowledge workers recognize the importance of regular movement but fail to interrupt focused tasks despite digital reminders. Using ambient light for temporal feedback, visual instruction screens, and haptic pulses, Kinesis embeds movement prompts into a tangible routine that requires no companion software. The prototype demonstrates how state-based interaction design and physical manipulation can reduce the friction between health intention and embodied action."
date: "2026-01-20"
subject: "Physical Computing"
coverImage: "/images/projects/kinesis/cover.jpg"
featured: false
galleryImages:
  - "/images/projects/kinesis/stretch-mode-01.jpg"
  - "/images/projects/kinesis/stretch-mode-02.jpg"
---

## Abstract

Prolonged seated work creates sustained immobility that digital reminders fail to interrupt effectively. Notifications are easily dismissed when attention is directed toward demanding cognitive tasks, and their ephemeral nature requires repeated conscious decision-making. This project explores whether a persistent physical presence, one that structures time and makes movement initiation a spatial action rather than a volitional choice, can better support behavioural change.

Drawing on the Pomodoro Technique's temporal segmentation model, Kinesis applies fixed work intervals to encourage postural variation. The device exists as a constant visual element within the workspace, functioning both as a progress indicator and as an object whose physical manipulation initiates stretch sequences.

## Solution

### Physical & Interaction Design

Kinesis comprises a cube-shaped device (laser-cut plywood housing, 3D-printed face) and a separate magnetic stand. This dual-object configuration allows flexible desk placement while establishing a spatial relationship between work and movement states.

**Interaction sequence**

The user initiates a session via power button. A 24-LED NeoPixel ring illuminates progressively in white—each LED represents a 5-minute interval in production mode (5 seconds in test mode). After 30 minutes, the ring shifts to green, signaling a stretch break.

Lifting the device from its stand triggers a hall effect sensor, initiating the stretch sequence. Two 128×128px OLED screens display text prompts and animated stick-figure demonstrations for two 30-second exercises: lateral lean, then lunge. Vibration motors pulse at the midpoint of each stretch. After one minute, the screens prompt device return to stand, resetting for the next cycle.

A secondary button allows stretch-skipping during meetings or other impractical contexts. The system completes after four work cycles.

The design deliberately avoids companion apps or external displays, keeping interaction self-contained.

![Kinesis in work mode on desk stand](/images/projects/kinesis/study-mode-desk.jpg)

### Technical System

An Arduino Nano ESP32 runs a state machine coordinating all I/O channels:

**Hardware**
- 24-LED NeoPixel strip (WS2812B): temporal visualization
- 2× OLED displays (SH1107, 128×128): bilateral stretch instructions
- Hall sensor + magnet: device removal detection
- 2× push buttons: power and stretch-skip
- 2× vibration motors: interval transition feedback

**State progression**
1. Idle → 2. Work (white LEDs increment, hall monitoring active) → 3. Stretch Ready (green ring) → 4. Stretch 1 (lean animation, 30s vibration pulse) → 5. Stretch 2 (lunge animation, 30s vibration pulse) → 6. Return to Work or Completion

Timing constants reside in `config.h` for rapid iteration between test and production modes. Display control (`display_functions.h`) and bitmap data (`bitmaps.h`) separate from core logic for maintainability. Serial logging enabled for debugging.

Using the hall sensor for stretch initiation—rather than button press—creates a more natural transition: the physical act of lifting inherently signals readiness while reducing cognitive load.

### Fabrication & Integration

The housing combines 4mm plywood panels with 3D-printed components. Living hinges on plywood allow folding into cube form, though achieving correct flexibility required multiple test iterations. The white PLA front face houses the LED ring and OLED screens. The top panel accommodates two tactile buttons positioned for thumb access.

The stand uses 3D-printed legs with embedded magnet aligned to the hall sensor—the most significant integration challenge. The sensor's ~5mm detection range necessitated precise positioning and testing across multiple magnet strengths. Misalignment caused unreliable state transitions, forcing housing revisions.

Electronics integration focused on cable management within compact interior volume while allowing flex for living hinges. Vibration motors mounted against interior walls to maximize feedback transmission.

Development followed a five-day intensive: concept and sketching (Day 1), CAD and materials (Day 2), fabrication and assembly (Days 3–4), system integration and software (Day 5). This compressed timeline prioritized functional demonstration over aesthetic refinement.

## Outcome

The prototype demonstrates that tangible interaction can scaffold health-supportive behaviours within knowledge work. Ambient light maintains temporal awareness without demanding attention. The shift to green provides clear but non-intrusive stretch signaling. Lifting the device naturally initiates movement sequences, and returning it to the stand creates satisfying closure.

During stretches, visual animation, text prompts, and mid-interval vibration successfully guide movements without requiring continuous screen reference. The haptic pulse serves as a progress milestone, encouraging completion.

**Limitations:**

The compressed timeline precluded user evaluation. The interaction model—while grounded in ergonomic and behavioural research—remains untested in authentic work contexts. Questions about long-term adherence, optimal interval duration, and effectiveness across work styles require longitudinal study. The current implementation offers no customization: users cannot adjust intervals or select alternative exercises.

**Contributions:**

The project validates three design hypotheses: (1) ambient light effectively communicates temporal progression without distraction inherent in countdown displays, (2) embedding stretch initiation into physical action reduces decision friction that undermines notifications, (3) state-based architecture cleanly manages interaction sequences while maintaining system comprehensibility.

Kinesis contributes to interaction design discourse on tangible health interventions by demonstrating that physical computing artefacts can support behavioural change through persistent presence, structured timing, and embodied interaction patterns—rather than motivational messaging or gamification common in digital wellness applications. The device makes desired behaviour easier to execute by building it into the temporal structure of work itself.
