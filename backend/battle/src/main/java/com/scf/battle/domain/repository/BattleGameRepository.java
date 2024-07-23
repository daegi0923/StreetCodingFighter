package com.scf.battle.domain.repository;

import com.scf.battle.domain.model.BattleGameRoom;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

@Repository
public class BattleGameRepository {

    private final Map<String, BattleGameRoom> gameRooms = Collections.synchronizedMap(new HashMap<>());

    public List<BattleGameRoom> findAllRooms() {
        return gameRooms.values().stream().toList();
    }
}