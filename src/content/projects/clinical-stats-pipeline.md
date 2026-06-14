---
title: "임상 데이터 통계 분석 파이프라인"
description: "PSM, IPTW 기반 인과 추론 및 생존 분석 자동화 파이프라인"
tags: ["R", "PSM", "IPTW", "Survival Analysis"]
order: 3
---

## 프로젝트 개요

후향적 임상 데이터에서 **인과 추론(Causal Inference)** 과 **생존 분석(Survival Analysis)** 을 재현 가능하게 수행하는 R 기반 분석 파이프라인을 설계했습니다.

## 핵심 기술

- **PSM (Propensity Score Matching)**: 치료군/대조군 균형 맞춤
- **IPTW (Inverse Probability of Treatment Weighting)**: 가중치 기반 편향 보정
- **Survival Analysis**: Kaplan-Meier, Cox PH 모델 자동화

## 파이프라인 구조

```
[Raw EMR Data] → [Preprocessing] → [PSM / IPTW] → [Survival Model] → [Report]
```

## 주요 기능

- 변수 선택 및 결측치 처리 자동화
- Love plot, KM curve, Forest plot 시각화 일괄 생성
- 분석 재현성을 위한 설정 파일(YAML) 기반 실행
