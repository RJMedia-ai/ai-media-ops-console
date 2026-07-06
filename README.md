# AI Media Operations Console V2

A local-first AI workstation console for managing models, GPU state, media workflows, IPTV/ETV pipelines, transcripts, metadata, and Git checkpoints.

This project is being built as a practical control layer for NVIDIA-focused AI development using local GPU hardware and cloud GPU instances.

## Current Status

Prototype Web UI is active.

Current modules:

- Local LLM status
- GPU and VRAM monitoring
- Topaz / media enhancement queue
- Plex library status
- IPTV control
- ETV playout
- Transcript processing
- Git checkpoint workflow
- Work queue dashboard

## Project Goal

The goal is to create a single workstation dashboard for building, testing, and operating AI media systems.

The console is intended to support:

- Local AI model workflows
- NVIDIA GPU monitoring
- CUDA / TensorRT / Riva testing
- IPTV and ETV metadata automation
- Media enhancement pipelines
- Transcript cleanup and classification
- Repeatable Git-based development checkpoints

The console is designed to coordinate local NVIDIA GPU work with remote Brev/NVIDIA GPU instances, rather than relying on unsupported external console hardware.

## Tech Stack

Current frontend:

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

Planned backend:

- FastAPI or Node.js
- Docker Compose
- NVIDIA CUDA
- TensorRT
- NVIDIA Riva
- Ollama / Open WebUI / LM Studio integration

## Current Hardware

Development machine:

- NVIDIA RTX 3070 Laptop GPU
- Ryzen 7 laptop platform
- Windows / WSL / Docker workflow

Additional available GPU hardware:

- MSI GeForce RTX 3060 Ti Ventus 2X desktop GPU
- Intended for future local worker-node testing once the desktop system is repaired

## Notes

This is an active prototype.

The priority is to build working systems first, then refine the architecture as each module becomes usable.