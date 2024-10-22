package com.scf.battle.domain.dto.Problem;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProblemChoice {

    private Integer choiceId;
    private Long problemId;
    private String choiceText;
}
