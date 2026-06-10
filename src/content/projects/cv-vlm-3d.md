---
title: "Computer vision-language model"
description: "3D 의료 영상 처리를 위한 멀티모달 비전-언어 모델 파이프라인"
tags: ["Computer Vision", "VLM", "MONAI", "3D CT"]
thumbnail: "/images/projects/cv-vlm-3d.svg"
order: 2
---

## 프로젝트 개요

3D 흉부 CT 영상을 입력으로 받아 해부학적 구조를 인식하고, 자연어 임상 보고서를 생성하는 **Vision-Language Model (VLM)** 파이프라인을 구축했습니다.

## 핵심 기술

- **3D Volume Encoding**: MONAI 기반 3D CNN 인코더로 공간 특징 추출
- **Cross-Modal Alignment**: 영상 특징과 텍스트 임베딩 간 대조 학습
- **Report Generation**: 구조화된 임상 소견 자동 생성

## 처리 파이프라인

1. DICOM 3D CT 볼륨 전처리 (리샘플링, 정규화)
2. 3D 인코더를 통한 특징 벡터 추출
3. VLM 디코더를 통한 자연어 보고서 생성
4. 해부학적 구조 하이라이트 오버레이

## 기대 효과

- 영상 판독 보조를 통한 의료진 업무 효율 향상
- 표준화된 보고서 형식으로 기록 품질 일관성 확보
