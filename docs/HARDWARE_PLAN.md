\# Hardware Plan



\## Current Local Machine



Main development machine:



\- NVIDIA RTX 3070 Laptop GPU

\- Ryzen 7 laptop platform

\- Windows

\- WSL

\- Docker Desktop



\## Secondary Hardware



Available desktop GPU:



\- MSI GeForce RTX 3060 Ti Ventus 2X



Planned use:



\- Local worker-node testing

\- CUDA experiments

\- model inference comparison

\- background GPU jobs



\## Target Architecture



The intended hardware layout is:



\- Laptop RTX 3070 = control station and local development

\- Desktop RTX 3060 Ti = local GPU worker once repaired

\- Brev GPU instances = cloud GPU acceleration and benchmarking



\## Notes



The project stays on the NVIDIA path because the target stack depends on:



\- CUDA

\- TensorRT

\- Riva

\- NVIDIA GPU monitoring

\- GPU instance benchmarking

