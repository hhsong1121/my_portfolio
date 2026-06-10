---
title: "흉부외과 CDSS 개발"
description: "Small language model과 RAG를 활용한 흉부외과 임상 의사결정 지원 시스템"
tags: ["sLM", "RAG", "Python", "FastAPI"]
thumbnail: "/images/projects/thoracic-cdss.svg"
order: 1
---

## 프로젝트 개요

흉부외과 영역의 임상 가이드라인과 수술 프로토콜을 구조화하여, 의료진이 자연어로 질의할 수 있는 **Clinical Decision Support System (CDSS)** 을 개발했습니다.

## 핵심 기술

- **sLM (Small Language Model)**: 경량화된 도메인 특화 언어 모델로 실시간 추론 지원
- **RAG (Retrieval-Augmented Generation)**: 임상 문헌 및 가이드라인 벡터 DB 기반 근거 제시
- **FastAPI 백엔드**: RESTful API를 통한 EMR 연동 가능 구조

## 시스템 구조도

```
[Clinical Query] → [RAG Retriever] → [sLM Generator] → [Evidence + Recommendation]
                        ↑
              [Guideline / Literature DB]
```

## 주요 성과

- 흉부외과 수술 전 평가 시나리오에서 관련 가이드라인 검색 정확도 향상
- 응답에 출처(Citation) 자동 첨부로 임상 신뢰성 확보
