# Application Data Flow

This diagram illustrates how data flows through the **AI Perception Network** application, from raw data processing to user interaction and AI analysis.

```mermaid
graph TD
    %% Data Source
    Sub_Data[surveyData.ts] -->|Math.round Accuracy Calculation| Data_Proc(Processed Respondent Data)

    %% UI State & Logic
    subgraph UI_State [App State & Filtering]
        State_Thres[Similarity Threshold]
        State_MinAcc[Min Accuracy Filter]
        State_Comp[Comparison Mode Toggle]
    end

    Data_Proc -->|Array.filter| Data_Filtered(Filtered Data)
    State_MinAcc -.-> Data_Filtered

    %% Statistics
    Data_Filtered -->|Memoized Reduction| Stats_Global[Global Stats: Max/Min/Avg Accuracy]
    Data_Filtered -->|Memoized Reduction| Stats_Comp[Comparison Stats: Students vs Employed]

    %% Network Logic
    Data_Filtered & State_Thres -->|buildGraph Utility| Graph_Data(Nodes & Links)
    Graph_Data --> Vis_D3[NetworkGraph: D3.js Force Simulation]
    Vis_D3 -->|Node Selection| Vis_Detail[Respondent Detail Panel]

    %% AI Integration
    Data_Filtered & State_Thres -->|Context Injection| AI_Svc[AI Service: askAboutGraph]
    UI_Chat[ChatBox UI] -->|User Query| AI_Svc
    AI_Svc -->|Gemini API| AI_Model[Gemini Pro / Flash]
    AI_Model -->|Natural Language Analysis| UI_Chat

    %% Styling
    style Sub_Data fill:#f9f,stroke:#333,stroke-width:2px
    style AI_Model fill:#00f,color:#fff,stroke-width:2px
    style Vis_D3 fill:#0f0,stroke:#333,stroke-width:2px
```

## Key Components

1.  **Data Processing**: Raw answers are compared against a `GROUND_TRUTH` array to calculate an accuracy percentage for each of the 173 respondents.
2.  **Interactive Filtering**: The application re-calculates the network and statistics in real-time as users adjust the "Similarity Threshold" or "Minimum Accuracy" filters.
3.  **Network Topology**: Links are generated only between respondents who share a specific number of identical answers, revealing clusters of shared perception (homophily).
4.  **AI Analyst Context**: Every time a user asks a question, the current filtered data state (averages, photo names, threshold) is injected into the AI prompt as structured context.
