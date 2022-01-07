function kangaroo(x1, v1, x2, v2) {
    if (v1 == v2) {
        return "NO";
    }
    else if (v2 > v1) {
        return "NO";
    }
    else if (v1 - v2 > x2 - x1) {
        return "NO";
    }
    else if (v1 - v2 == 1) {
        return "YES";
    }
    else if (v1 - v2 == x2 - x1) {
        return "YES";
    }
    else { 
        if ((x2 - x1) % (v1 - v2) == 0) {
            return "YES";
        }
        else { 
            return "NO";
        }
    }
}